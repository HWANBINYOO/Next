import { NextRequest, NextResponse, userAgent } from 'next/server'

// export function middleware(request: NextRequest) {
  // let res = NextResponse.next();
  // let cookie = req.cookies["my_cookie_name"];
  // console.log(req.cookies)
  // // console.log(req.cookies);

  // const ua = userAgent(req);
  // if (ua.isBot) {
  //   req.nextUrl.searchParams.set('from', req.nextUrl.pathname)
  //   req.nextUrl.pathname = '/login'
  //   return NextResponse.redirect(req.nextUrl)
  // } 

  // console.log(req.url);
  // console.log(req.cookies);
  
  
  // if (!req.nextUrl.pathname.startsWith("/enter") && !req.cookies.get("carrotsession")) // 만약 주소가 enter 가아니고 토큰이 없다면 /enter 주소로 이동
  //   return NextResponse.redirect(new URL("/enter", req.url));
// }