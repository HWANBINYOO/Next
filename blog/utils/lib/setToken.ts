import CustomAxois from "./CustomAxois";
import cookie from 'react-cookies'
import { useRouter } from "next/router";

const setToken = (accessToken:string, refreshToken:string) => {
  const router = useRouter();
    CustomAxois.defaults.headers.common["Blog_accessToken"] = accessToken;
    // CustomAxois.defaults.headers.common["Blog_refreshToken"] = refreshToken;

    const expires = new Date()
    const expiresAcess = new Date()
    const expiresRef = new Date()
    expiresAcess.setDate(Date.now() + 60000 * 3)  // 3분
    expiresRef.setDate(Date.now() +  60000 * 60 * 24 * 7) // 일주일
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24) // 1일


    cookie.save(
        'Blog_accessToken',
        accessToken,
        {
            path: '/',
            expires : expires,
            httpOnly: false
        }
      )
      cookie.save(
        'Blog_refreshToken',
        refreshToken,
        {
            path: '/',
            expires : expiresRef,
            httpOnly: false
        }
      )

}

export default setToken 