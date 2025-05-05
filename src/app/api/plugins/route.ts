import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get('search');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '9', 10);
  const skip = (page - 1) * limit;
  
  // Build filters
  const filters: any = {};
  
  if (search) {
    filters.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { author: { contains: search, mode: 'insensitive' } }
    ];
  }
  
  try {
    // Check if database is accessible
    await prisma.$queryRaw`SELECT 1`;
    
    const [plugins, totalCount] = await Promise.all([
      prisma.plugin.findMany({
        where: filters,
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit,
      }),
      prisma.plugin.count({
        where: filters
      })
    ]);
    
    const totalPages = Math.ceil(totalCount / limit);
    
    return NextResponse.json({ 
      plugins,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching plugins:', error);
    
    // Provide a more detailed error message
    let errorMessage = 'An unexpected error occurred';
    let statusCode = 500;
    
    if (error instanceof Error) {
      errorMessage = error.message;
      
      // Handle specific Prisma errors
      if (error.message.includes('connect ECONNREFUSED') || 
          error.message.includes('connection') ||
          error.message.includes('database')) {
        errorMessage = 'Database connection error. Please try again later.';
        statusCode = 503; // Service Unavailable
      }
    }
    
    return NextResponse.json(
      { error: 'Error fetching plugins', message: errorMessage },
      { status: statusCode }
    );
  }
}

// POST - Create a new plugin
export async function POST(request: NextRequest) {
  try {
    // Get the JWT token directly
    const token = await getToken({ 
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });
    
    // Check if user is authenticated and is admin
    if (!token || !token.isAdmin) {
      console.log('Unauthorized: User not admin or not logged in');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.description || !data.author || !data.githubUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create plugin
    const newPlugin = await prisma.plugin.create({
      data: {
        name: data.name,
        description: data.description,
        author: data.author,
        githubUrl: data.githubUrl,
        docsUrl: data.docsUrl || null,
        imageData: data.imageData || null,
      },
    });

    return NextResponse.json({ plugin: newPlugin }, { status: 201 });
  } catch (error) {
    console.error('Error creating plugin:', error);
    return NextResponse.json(
      { error: 'Failed to create plugin' },
      { status: 500 }
    );
  }
} 