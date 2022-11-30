import CustomAxois from "../utils/lib/CustomAxois";
import cookies from "next-cookies";
import cookie from 'react-cookies'

const useGetToken = async  (ctx : any) => {
 const allCookies = cookies(ctx);
  let accessToken = allCookies['accessToken'] || "";
  let refreshToken = allCookies["refreshToken"] || "";

  if (!accessToken) {
    const {data} = await CustomAxois.patch("/auth/reissue",
      { headers: { "RefreshToken": refreshToken} }
    );
    accessToken = data.newAccessToken;
    refreshToken =  data.newRefreshToken;
  }

  return { accessToken , refreshToken };
};

const useRemoveToken = () => {
  document.cookie = `Authorization=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  document.cookie = `RefreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

const useSetToken = (accessToken:string, refreshToken:string) => {
  document.cookie = `Authorization=${accessToken}; path=/; expires=${new Date(Date.now() +  60000 * 3)}` // 3분
  document.cookie = `RefreshToken=${refreshToken}; path=/; expires=${new Date(Date.now() +  60000 * 60 * 24 * 7)}` // 일주일
}

export {useGetToken , useRemoveToken , useSetToken};