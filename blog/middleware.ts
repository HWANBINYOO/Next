import {NextRequest,NextResponse,userAgent,} from "next/server";

export const middleware = async (req:NextRequest) => {
  const Authorization = req.cookies.get('Authorization')
  const RefreshToken =  req.cookies.get('RefreshToken') 
  const confirmedUrl = ['/post' , '/profile' , '/about' , '/boardadd']
  const joinURL = ['/auth/signup']
  const { pathname } = req.nextUrl

  if(joinURL.includes(pathname) && Authorization){
    return NextResponse.redirect(new URL('/post', req.url))
  }
  else if (confirmedUrl.includes(pathname) && !RefreshToken) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  const ua = userAgent(req);
  if (ua.isBot) {
    return NextResponse.redirect(new URL('/', req.url))
  }

}

export const config = { matcher: "/((?!.*\\.).*)" };
