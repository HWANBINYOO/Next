import {NextRequest,NextResponse,userAgent} from "next/server";

export const middleware = async (req:NextRequest) => {
  const RefreshToken =  req.cookies.get('RefreshToken') 
  const ua = userAgent(req);

  if (!RefreshToken) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (ua.isBot) {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: ['/about','/post','/boardadd','/post/(.*)','/profile/(.*)'],
};