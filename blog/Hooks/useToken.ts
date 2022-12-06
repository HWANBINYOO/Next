import CustomAxois from "../utils/lib/CustomAxios";
import cookies from "next-cookies";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";

const UseGetToken = async (ctx : GetServerSidePropsContext) => {
  const allCookies = cookies(ctx);
  const [Authorization,setAuthorization] = useState(allCookies['Authorization'] || "");
  const [RefreshToken,setRefreshToken] = useState(allCookies['RefreshToken'] || "");

  if(!Authorization){
    try{
      const {data} = await CustomAxois.patch(`/auth/reissue`,{},{headers: {RefreshToken}});
      setAuthorization(data.accessToken)
      setRefreshToken(data.refreshToken)
      allCookies['Authorization'] =  data.accessToken
      allCookies['RefreshToken'] = data.refreshToken
    } catch(e){
      console.log(e);
    }
  }
  return { Authorization , RefreshToken };
};

const UseSetToken = (Authorization:string, RefreshToken:string) => {
  document.cookie = `Authorization=${Authorization}; path=/; max-age=180` // 3분
  document.cookie = `RefreshToken=${RefreshToken}; path=/; max-age=604800` // 일주일
}

const UseRemoveToken = () => {
  document.cookie = `Authorization=; path=/; max-age=0`;
  document.cookie = `RefreshToken=; path=/; max-age=0`;
}

const UseIsToken = () => {
  if(typeof window !== 'object') return;
  let Authorization = document.cookie.match('(^|;) ?' + "Authorization" + '=([^;]*)(;|$)');
  let RefreshToken = document.cookie.match('(^|;) ?' + "RefreshToken" + '=([^;]*)(;|$)');
  return Authorization && RefreshToken && Authorization[2] && RefreshToken[2] ? true : false
}

const UseGeTokenDocument = () => {
  let AuthorizationCookie = document.cookie.match('(^|;) ?' + "Authorization" + '=([^;]*)(;|$)') || "";
  let RefreshTokenCookie = document.cookie.match('(^|;) ?' + "RefreshToken" + '=([^;]*)(;|$)') || "";
  const Authorization = AuthorizationCookie[2];
  const RefreshToken = RefreshTokenCookie[2];
  return { Authorization , RefreshToken }
}

export {UseGetToken , UseRemoveToken , UseSetToken , UseIsToken , UseGeTokenDocument};