import CustomAxois from "../utils/lib/CustomAxois";
import cookies from "next-cookies";

const UseGetToken = async  (ctx : any) => {
  const allCookies = cookies(ctx);
  let accessToken = allCookies['accessToken'] || "";
  let refreshToken = allCookies["refreshToken"] || "";
  
  const {data} = await CustomAxois.patch("/auth/reissue",
    { headers: { "RefreshToken": refreshToken} }
  );
  UseSetToken(data.newAccessToken,data.newRefreshToken)
  return { accessToken , refreshToken };
};

const UseSetToken = (accessToken:string, refreshToken:string) => {
  CustomAxois.defaults.headers.common["Authorization"] = accessToken;
  document.cookie = `Authorization=${accessToken}; path=/; max-age=180` // 3분
  document.cookie = `RefreshToken=${refreshToken}; path=/; max-age=604800` // 일주일
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

export {UseGetToken , UseRemoveToken , UseSetToken , UseIsToken};