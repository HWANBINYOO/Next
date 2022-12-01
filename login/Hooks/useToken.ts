import CustomAxois from "../src/utils/lib/CustomAxois";
import cookies from "next-cookies";
import { useRouter } from "next/router";

const UseGetToken = async  (ctx : any) => {
 const allCookies = cookies(ctx);
  let accessToken = allCookies['accessToken'];
  let refreshToken = allCookies["refreshToken"];
  // CustomAxois.defaults.headers.common["Authorization"] = accessToken;

  if(!refreshToken){
    UseRemoveToken()
  }
  if (!accessToken) {
    const {data} = await CustomAxois.patch("/auth/reissue",
      { headers: { "RefreshToken": refreshToken} }
    );
    UseSetToken(data.newAccessToken,data.newRefreshToken)
  }
  return { accessToken , refreshToken };
};

const UseSetToken = (accessToken:string, refreshToken:string) => {
  CustomAxois.defaults.headers.common["Authorization"] = accessToken;
  document.cookie = `Authorization=${accessToken}; path=/; max-age=180` // 3분
  document.cookie = `RefreshToken=${refreshToken}; path=/; max-age=604800` // 일주일
}

const UseRemoveToken = () => {
  // const router = useRouter();
  document.cookie = `Authorization=; path=/; max-age=0`;
  document.cookie = `RefreshToken=; path=/; max-age=0`;
  // router.push('/');
}

export {UseGetToken , UseRemoveToken , UseSetToken};