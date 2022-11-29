import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  userAgent,
} from "next/server";
import cookies from "next-cookies";
import setToken from './utils/lib/setToken';
import getToken from './utils/lib/getToken';
import removeToken from './utils/lib/removeToken';
import { NextPageContext } from 'next';

export const middleware = async (req:NextRequest , ctx:NextPageContext) => {
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  const RefreshToken = allCookies["RefreshToken"] || "";
  // if(!req.cookies){
  //  return NextResponse.redirect("http://localhost:3000/member/login");
  // }
  console.log(req.nextUrl.pathname);
  if (!req.url.includes("/member/login") && !req.url.includes("/member/join")) {
    if(!RefreshToken){
    req.nextUrl.pathname = "/member/login";
    // req.nextUrl.searchParams.set("from", req.nextUrl.pathname);
    return NextResponse.redirect(req.nextUrl);
    }
    else if(!(Authorization === "" || Authorization === undefined)) {
      // const { accessToken , refreshToken } = await getToken(appContext);
      // setToken(accessToken, refreshToken)
    }
  }

  // const ua = userAgent(req);
  // if (ua.isBot) {
  //   req.nextUrl.searchParams.set('from', req.nextUrl.pathname)
  //   req.nextUrl.pathname = '/'
  //   return NextResponse.redirect(req.nextUrl)
  // }
  
  // if (!req.nextUrl.pathname.startsWith("/auth/signin") && !req.cookies.get("carrotsession")) { // 만약 주소가 로그인페이지가 아니고 토큰이 없다면 로그인 페이지로 이동
  //   return NextResponse.redirect(new URL("/enter", req.url));
  // }
}