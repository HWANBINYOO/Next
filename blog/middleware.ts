import {NextRequest,NextResponse,userAgent,} from "next/server";

export const middleware = async (req:NextRequest) => {
  const Authorization = req.cookies.get('Authorization')
  const RefreshToken =  req.cookies.get('RefreshToken') 
  // const joinURL = ['/auth/signup' , '/auth/signin' , '/']
  let confirmedUrl = /[/post|/profile|/about|/boardadd]/;
  let joinUrl = /[/auth|/login|/signin]/;
  let confirmedStr = 'post profile about boardadd'
  const { pathname } = req.nextUrl

  console.log(!joinUrl.test(pathname));
  // console.log(pathname);
  // console.log(confirmedUrl.test(pathname) && !joinUrl.test(pathname) && !RefreshToken && !Authorization);
  
  if(!confirmedUrl.test(pathname) && Authorization && RefreshToken){
    return NextResponse.redirect(new URL('/post', req.url))
  }
  // else if (confirmedUrl.test(pathname) && !joinUrl.test(pathname) && !RefreshToken && !Authorization) {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

  const ua = userAgent(req);
  if (ua.isBot) {
    return NextResponse.redirect(new URL('/', req.url))
  }

}

export const config = { matcher: "/((?!.*\\.).*)" };