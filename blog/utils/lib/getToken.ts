import CustomAxois from "./CustomAxois";
import cookies from "next-cookies";
import { AppContext } from "next/app";
import setToken from "./setToken";


const getToken = async  (appContext: AppContext) => {
 const {ctx} = appContext;
 const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['accessToken'];
  const refreshTokenByCookie = (allCookies["refreshToken"] || "");

  if (!accessTokenByCookie) {
    const {data} = await CustomAxois.patch(
      "/auth/reissue",
      {},
      { headers: { "RefreshToken": refreshTokenByCookie} }
    );
    setToken(data.accessToken , data.refreshToken)
  } else {  
    const {data} = await CustomAxois.get("/auth/reissue2");
    setToken(data.accessToken , data.refreshToken)
  }

  return { accessTokenByCookie , refreshTokenByCookie };
};

export default getToken;