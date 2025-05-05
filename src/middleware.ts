import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    
    // If not authenticated, redirect to login
    if (!token) {
      console.log('Middleware: No token found, redirecting to login');
      const url = new URL('/login', request.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }
    
    // Check for admin access
    if (!token.isAdmin) {
      console.log('Middleware: User not admin, redirecting to home');
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    // Allow access to admin routes
    console.log('Middleware: Admin access granted for path:', pathname);
    return NextResponse.next();
  }
  
  // Continue for non-protected routes
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
}; 