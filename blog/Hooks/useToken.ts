import CustomAxois from "../utils/lib/CustomAxois";
import cookies from "next-cookies";
import { AuthorizationAtom } from "../utils/recoil/state";
import { useRecoilState } from "recoil";

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
  
  useSetToken(accessToken,refreshToken)
  return { accessToken , refreshToken };
};

const useSetToken = (accessToken:string, refreshToken:string) => {
  // const [Authorization , setAuthorization] = useRecoilState(AuthorizationAtom)
  // setAuthorization(accessToken)
  CustomAxois.defaults.headers.common["Authorization"] = accessToken;
  document.cookie = `Authorization=${accessToken}; path=/; expires=${new Date(Date.now() +  60000 * 3)}` // 3분
  document.cookie = `RefreshToken=${refreshToken}; path=/; expires=${new Date(Date.now() +  60000 * 60 * 24 * 7)}` // 일주일
}

const useRemoveToken = () => {
  document.cookie = `Authorization=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  document.cookie = `RefreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export {useGetToken , useRemoveToken , useSetToken};