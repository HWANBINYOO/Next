import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { useCookies } from "react-cookie";


// export function middleware(req: NextRequest, ev: NextFetchEvent) {
//     const [cookies, setCookie] = useCookies(["Blog_accessToken",]);
//     const { pathname } = req.nextUrl
//     const confirmedUrl = ['/', '/auth/signin', '/auth/signup']
//     if (!confirmedUrl.includes(pathname) && !cookies.Blog_accessToken) {
//       const url = req.nextUrl.clone()
//       url.pathname = '/auth/signin'
//       return NextResponse.redirect(`${url}`)
//     }
//   }
  