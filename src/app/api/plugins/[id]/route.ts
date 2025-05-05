import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getToken } from 'next-auth/jwt';

// GET a single plugin by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const plugin = await prisma.plugin.findUnique({
      where: { id: params.id },
    });

    if (!plugin) {
      return NextResponse.json(
        { error: 'Plugin not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ plugin });
  } catch (error) {
    console.error('Error fetching plugin:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plugin' },
      { status: 500 }
    );
  }
}

// UPDATE a plugin
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    // Check if plugin exists
    const existingPlugin = await prisma.plugin.findUnique({
      where: { id: id },
    });

    if (!existingPlugin) {
      return NextResponse.json(
        { error: 'Plugin not found' },
        { status: 404 }
      );
    }

    // Update plugin
    const updatedPlugin = await prisma.plugin.update({
      where: { id: id },
      data: {
        name: data.name,
        description: data.description,
        author: data.author,
        githubUrl: data.githubUrl,
        docsUrl: data.docsUrl,
        imageData: data.imageData !== undefined ? data.imageData : existingPlugin.imageData,
      },
    });

    return NextResponse.json({ plugin: updatedPlugin });
  } catch (error) {
    console.error('Error updating plugin:', error);
    return NextResponse.json(
      { error: 'Failed to update plugin' },
      { status: 500 }
    );
  }
}

// DELETE a plugin
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    // Check if plugin exists
    const existingPlugin = await prisma.plugin.findUnique({
      where: { id: id },
    });

    if (!existingPlugin) {
      return NextResponse.json(
        { error: 'Plugin not found' },
        { status: 404 }
      );
    }

    // Delete plugin
    await prisma.plugin.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: 'Plugin deleted successfully' });
  } catch (error) {
    console.error('Error deleting plugin:', error);
    return NextResponse.json(
      { error: 'Failed to delete plugin' },
      { status: 500 }
    );
  }
} 