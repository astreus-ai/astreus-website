import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Redirect /docs to framework intro page
  if (pathname === '/docs' || pathname === '/docs/') {
    return NextResponse.redirect(new URL('/docs/framework/intro', request.url));
  }
  
  // Redirect /docs/framework to intro
  if (pathname === '/docs/framework' || pathname === '/docs/framework/') {
    return NextResponse.redirect(new URL('/docs/framework/intro', request.url));
  }
  
  // Redirect /docs/examples to first child (quick-start)
  if (pathname === '/docs/examples' || pathname === '/docs/examples/') {
    return NextResponse.redirect(new URL('/docs/examples/quick-start', request.url));
  }
  
  // Redirect /docs/plugins to first child (index)
  if (pathname === '/docs/plugins' || pathname === '/docs/plugins/') {
    return NextResponse.redirect(new URL('/docs/plugins/evm-plugin', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/docs',
    '/docs/',
    '/docs/framework',
    '/docs/framework/',
    '/docs/examples',
    '/docs/examples/',
    '/docs/plugins',
    '/docs/plugins/'
  ]
};