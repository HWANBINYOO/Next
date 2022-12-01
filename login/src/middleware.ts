import {NextRequest,NextResponse,userAgent,} from "next/server";
import { NextPageContext } from 'next';

export const middleware = async (req:NextRequest , ctx:NextPageContext) => {
  const Authorization = req.cookies.get('Authorization')
  const RefreshToken =  req.cookies.get('RefreshToken') 
  const confirmedUrl = ['/member/me']
  const joinURL = ['/' , '/member/login' , 'member/join']
  const { pathname } = req.nextUrl

  if(joinURL.includes(pathname) && Authorization){
    return NextResponse.redirect(new URL('/member/me', req.url))
  }
  else if (confirmedUrl.includes(pathname) && !RefreshToken) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const ua = userAgent(req);
  if (ua.isBot) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  
}

export const config = { matcher: "/((?!.*\\.).*)" };
