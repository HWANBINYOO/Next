import CustomAxois from "../src/utils/lib/CustomAxois";
import cookies from "next-cookies";
import { GetServerSidePropsContext } from "next";
import { destroyCookie, setCookie } from "nookies";

const UseGetToken = async  (ctx : GetServerSidePropsContext) => {
  let Authorization = ctx.req.cookies['Authorization'] || "";
  let RefreshToken =  ctx.req.cookies['RefreshToken'] || "";

  if (!Authorization) {
    try{
    const {data} = await CustomAxois.patch("/auth/reissue",{},{ headers: {RefreshToken }});
    Authorization = data.Authorization
    RefreshToken = data.refreshToken
    UseSetToken(Authorization,RefreshToken,ctx)
  } catch(e){
    console.log(e);
  }
}
  return { Authorization };
};

const UseSetToken = (Authorization:string, RefreshToken:string , ctx:GetServerSidePropsContext|null):void => {
  setCookie(ctx, 'Authorization', Authorization, {maxAge: 180,path: '/',}) // 3분
  setCookie(ctx, 'RefreshToken', RefreshToken, {maxAge: 604800,path: '/',}) // 일주일
}

const UseRemoveToken = (): void => {
  destroyCookie(null, 'Authorization')
  destroyCookie(null, 'RefreshToken')
}

export {UseGetToken , UseRemoveToken , UseSetToken};