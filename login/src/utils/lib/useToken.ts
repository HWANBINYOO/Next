import CustomAxois from "./CustomAxois";
import cookies from "next-cookies";
import { NextPageContext } from "next";
import { useRouter } from "next/router";

const useToken = async  (ctx : NextPageContext) => {
const router = useRouter();
const allCookies = cookies(ctx);
 const refreshTokenByCookie = (allCookies["refreshToken"] || "");
 let accessToken : string;
 let refreshToken : string;

// if(!refreshTokenByCookie){
//   router.push("/member/login");
// }

 const {data} = await CustomAxois.post("/refresh",{ headers: { 
   "RefreshToken": refreshTokenByCookie
 }
  });
    accessToken = data.accessToken;
    refreshToken = data.refreshToken;
  return { accessToken , refreshToken };
};

export default useToken;