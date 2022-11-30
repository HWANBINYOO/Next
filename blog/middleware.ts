import { NextRequest, NextResponse, userAgent } from 'next/server'
import cookies from "next-cookies";
import setToken from './utils/lib/setToken';
import getToken from './utils/lib/getToken';
import removeToken from './utils/lib/removeToken';
import { AppContext } from 'next/app';

export const middleware = async (appContext:any) => {
  const {ctx , req} = appContext;
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  const RefreshToken = (allCookies["RefreshToken"] || "");
  console.log(RefreshToken);
  let res = NextResponse.next();

  const { origin, pathname } = req.nextUrl; // url 가져오기

  if (!pathname.includes("/auth/signin") && !pathname.includes("/auth/signup")) {
  console.log(req.nextUrl);
    if(!RefreshToken){
      removeToken();
      return NextResponse.redirect(`${origin}/auth/signin`);
    }
    else if(!(Authorization === "" || Authorization === undefined)) {
      const { accessToken , refreshToken } = await getToken(appContext);
      setToken(accessToken, refreshToken)
    }

  }

  const ua = userAgent(req);
  if (ua.isBot) {
    req.nextUrl.searchParams.set('from', req.nextUrl.pathname)
    req.nextUrl.pathname = '/'
    return NextResponse.redirect(req.nextUrl)
  }
  
  if (!req.nextUrl.pathname.startsWith("/auth/signin") && !req.cookies.get("carrotsession")) { // 만약 주소가 로그인페이지가 아니고 토큰이 없다면 로그인 페이지로 이동
    return NextResponse.redirect(new URL("/enter", req.url));
  }
}