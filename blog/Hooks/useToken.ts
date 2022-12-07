import CustomAxois from "../utils/lib/CustomAxios";
import { GetServerSidePropsContext } from "next";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import nookies from 'nookies'


const UseGetToken = async (ctx : GetServerSidePropsContext) => {
  let Authorization = ctx.req.cookies['Authorization'] || "";
  let RefreshToken =  ctx.req.cookies['RefreshToken'] || "";
  const cookies = nookies.get(ctx)

  if(!Authorization){
    try{
      const {data} = await CustomAxois.patch(`/auth/reissue`,{},{headers: {RefreshToken}});
      Authorization = data.accessToken
      RefreshToken = data.refreshToken
      nookies.set(ctx, 'Authorization', data.accessToken, {
        maxAge: 180,
        path: '/',
      })
      nookies.set(ctx, 'RefreshToken', data.refreshToken, {
        maxAge: 604800,
        path: '/',
      })
      console.log(cookies);
    } catch(e){
      console.log(e);
    }
  }
  return { Authorization };
};

const UseSetToken = (Authorization:string, RefreshToken:string) => {
  setCookie(null, 'Authorization', Authorization, {maxAge: 180,path: '/',}) // 3분
  setCookie(null, 'RefreshToken', RefreshToken, {maxAge: 604800,path: '/',}) // 일주일
}

const UseRemoveToken = () => {
  destroyCookie(null, 'Authorization')
  destroyCookie(null, 'RefreshToken')
}

const UseIsToken = () => {
  if(typeof window !== 'object') return;
  const cookies = parseCookies()
  const Authorization = cookies.Authorization
  const RefreshToken = cookies.RefreshToken
  return Authorization && RefreshToken ? true : false
}

const UseGeTokenDocument = () => {
  const cookies = parseCookies()
  const Authorization = cookies.Authorization
  const RefreshToken = cookies.RefreshToken
  return { Authorization , RefreshToken }
}

export {UseGetToken , UseRemoveToken , UseSetToken , UseIsToken , UseGeTokenDocument};