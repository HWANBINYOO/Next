import {NextRequest,NextResponse,userAgent} from "next/server";

export const middleware = async (req:NextRequest) => {
  const Authorization = req.cookies.get('Authorization')
  const RefreshToken =  req.cookies.get('RefreshToken') 
  const { pathname } = req.nextUrl
  console.log(pathname);
  // if(!confirmedUrl.test(pathname) && Authorization && RefreshToken){
    // return NextResponse.redirect(new URL('/post', req.url))
  // }
  if (!RefreshToken && !Authorization) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const ua = userAgent(req);
  if (ua.isBot) {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: ['/about','/post','/boardadd','/post/(.*)','/profile/(.*)'],
};