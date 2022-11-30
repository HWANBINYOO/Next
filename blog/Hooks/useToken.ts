import CustomAxois from "../utils/lib/CustomAxois";
import cookies from "next-cookies";
import { NextPageContext } from "next";
import cookie from 'react-cookies'

const useGetToken = async  (ctx : NextPageContext) => {
 const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['accessToken'] || "";
  const refreshTokenByCookie = allCookies["refreshToken"] || "";
  let accessToken : string;
  let refreshToken : string;

  if (!accessTokenByCookie) {
    const {data} = await CustomAxois.patch("/auth/reissue",
      { headers: { "RefreshToken": refreshTokenByCookie} }
    );
    accessToken = data.newAccessToken;
    refreshToken =  data.newRefreshToken;
    return { accessToken , refreshToken };
  }

  return { accessTokenByCookie , refreshTokenByCookie };
};

const useRemoveToken = () => {
    cookie.remove('Authorization')
    cookie.remove('RefreshToken')
}


const useSetToken = (accessToken:string, refreshToken:string) => {
  CustomAxois.defaults.headers.common["Authorization"] = accessToken;
  // CustomAxois.defaults.headers.common["RefreshToken"] = refreshToken;

  const expires = new Date()
  const expiresAcess = new Date()
  const expiresRef = new Date()
  expiresAcess.setDate(Date.now() + 60000 * 3)  // 3분
  expiresRef.setDate(Date.now() +  60000 * 60 * 24 * 7) // 일주일
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24) // 1일


  cookie.save(
      'Authorization',
      accessToken,
      {
          path: '/',
          expires : expiresAcess,
          httpOnly: false
      }
    )
    cookie.save(
      'RefreshToken',
      refreshToken,
      {
          path: '/',
          expires : expiresRef,
          httpOnly: false
      }
    )

}

export {useGetToken , useRemoveToken , useSetToken};