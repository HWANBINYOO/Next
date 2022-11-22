import CustomAxois from "./CustomAxois";
import cookies from "next-cookies";
import { AppContext } from "next/app";
import setToken from "./setToken";

const getToken = async  (appContext: AppContext) => {
 const {ctx} = appContext;
 const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['accessToken'];
  const refreshTokenByCookie = (allCookies["refreshToken"] || "");
  let accessToken : string;
  let refreshToken : string;

  if (!accessTokenByCookie) {
    const {data} = await CustomAxois.patch("/auth/reissue",
      { headers: { "RefreshToken": refreshTokenByCookie} }
    );
    accessToken = data.accessToken;
    refreshToken =  data.refreshToken;
  } else {  
    const {data} = await CustomAxois.get("/auth/reissue2");
    accessToken = data.accessToken;
    refreshToken =  data.refreshToken;
  }

  return { accessToken , refreshToken };
};

export default getToken;