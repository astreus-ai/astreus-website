import { NextRequest, NextResponse } from 'next/server';

// URLs that should be excluded from the redirect
const excludedPaths = [
  '/coming-soon',
  '/_next',
  '/favicon.ico',
  '/api',
  '/images',
  '/assets',
  '/astreus-logo-black.svg'  // Allow direct access to logo file
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow SVG and other static files
  if (pathname.endsWith('.svg') || pathname.endsWith('.ico') || pathname.endsWith('.png') || pathname.endsWith('.jpg')) {
    return NextResponse.next();
  }
  
  // Skip redirect for excluded paths
  if (excludedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  
  // Redirect to Coming Soon page
  const url = request.nextUrl.clone();
  url.pathname = '/coming-soon';
  return NextResponse.redirect(url);
}

// Match all request paths except the ones starting with excluded paths and static files
export const config = {
  matcher: ['/((?!coming-soon|_next|favicon.ico|api|images|assets).*)'],
}; 