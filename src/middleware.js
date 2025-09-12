import { NextResponse} from 'next/server';
import { jwtDecode } from 'jwt-decode';

export async function middleware(request) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;

  const isProtectedPath = pathname.startsWith('/basket') || pathname.startsWith('/profile');

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  if (!accessToken) {
    const redirectResponse = NextResponse.redirect(new URL('/', request.url));
    redirectResponse.cookies.delete('accessToken');
    redirectResponse.cookies.delete('refreshToken');
    return redirectResponse;
  }

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now();
  const isExpired = decoded && decoded.exp ? currentTime >= decoded.exp * 1000 : true;

  if (isExpired) {
    const redirectResponse = NextResponse.redirect(new URL('/', request.url));
    redirectResponse.cookies.delete('accessToken');
    redirectResponse.cookies.delete('refreshToken');
    return redirectResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};