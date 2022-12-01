import CustomAxois from "../src/utils/lib/CustomAxois";
import cookies from "next-cookies";

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
  
  UseSetToken(accessToken,refreshToken)
  return { accessToken , refreshToken };
};

const UseSetToken = (accessToken:string, refreshToken:string) => {
  CustomAxois.defaults.headers.common["Authorization"] = accessToken;
  document.cookie = `Authorization=${accessToken}; path=/; max-age=180` // 3분
  document.cookie = `RefreshToken=${refreshToken}; path=/; maxAge=${60000 * 60 * 24 * 7}` // 일주일
}

const useRemoveToken = () => {
  document.cookie = `Authorization=; path=/; max-age=0`;
  document.cookie = `RefreshToken=; path=/; max-age=0`;
}

export {useGetToken , useRemoveToken , UseSetToken};