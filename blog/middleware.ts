import {NextRequest,NextResponse} from "next/server";
import { useGetToken } from "./Hooks/useToken";

export const middleware = async (req:NextRequest , ctx:any) => {
  const Authorization = req.cookies.get('Authorization')
  const RefreshToken =  req.cookies.get('RefreshToken') 
  const confirmedUrl = ['/post' , '/profile' , '/about' , '/boardadd']
  const joinURL = ['/auth/signup']
  const { pathname } = req.nextUrl

  console.log(pathname);

  if(joinURL.includes(pathname) && Authorization){
    return NextResponse.redirect(new URL('/post', req.url))
  }
  else if (confirmedUrl.includes(pathname) && !RefreshToken) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }
  
  // if (!req.url.includes("/member/login") && !RefreshToken) {
  //     // req.nextUrl.pathname = "/member/login";
  //     // return NextResponse.redirect(req.nextUrl);

  //   // }
  //   // else if(!(Authorization === "" || Authorization === undefined)) {
  //   //   // const { accessToken , refreshToken } = await getToken(appContext);
  //   //   // setToken(accessToken, refreshToken)
  //   // }
  // } 

  // const ua = userAgent(req);
  // if (ua.isBot) {
  //   req.nextUrl.searchParams.set('from', req.nextUrl.pathname)
  //   req.nextUrl.pathname = '/'
  //   return NextResponse.redirect(req.nextUrl)
  // }
  
  // if (!req.nextUrl.pathname.startsWith("/member/login") && !RefreshToken) { // 만약 주소가 로그인페이지가 아니고 토큰이 없다면 로그인 페이지로 이동
  //   return NextResponse.redirect(new URL("/member/login", req.url));
  // }
}

export const config = { matcher: "/((?!.*\\.).*)" };
