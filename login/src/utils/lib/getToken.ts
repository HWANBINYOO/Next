import CustomAxois from "./CustomAxois";
import cookies from "next-cookies";
import { AppContext } from "next/app";

const getToken = async  (appContext: AppContext) => {
 const {ctx} = appContext;
 const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['accessToken'];
  const refreshTokenByCookie = (allCookies["refreshToken"] || "");
  let accessToken : string;
  let refreshToken : string;

  if (!accessTokenByCookie) {
    const {data} = await CustomAxois.post("/refresh",
    { headers: { 
        "RefreshToken": refreshTokenByCookie
      } 
    }
    );
    accessToken = data.accessToken;
    refreshToken =  data.refreshToken;
    return { accessToken };
  }
  return { accessTokenByCookie };
};

export default getToken;