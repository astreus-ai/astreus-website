import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Redirect /docs/concepts to first child (agents)
  if (pathname === '/docs/concepts' || pathname === '/docs/concepts/') {
    return NextResponse.redirect(new URL('/docs/concepts/agents', request.url));
  }
  
  // Redirect /docs/guides to first child (quick-start)
  if (pathname === '/docs/guides' || pathname === '/docs/guides/') {
    return NextResponse.redirect(new URL('/docs/guides/quick-start', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/docs/concepts/:path*',
    '/docs/guides/:path*'
  ]
};