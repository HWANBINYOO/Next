import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import cookies from "next-cookies";
import App from 'next/app';
import CustomAxios from '../utils/lib/CustomAxios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
    )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { ctx } = appContext;
//   const allCookies = cookies(ctx);
//   const accessTokenByCookie = allCookies['Authorization'] || "";
//   const refreshTokenByCookie = allCookies["RefreshToken"] || "";
//   CustomAxios.defaults.headers.common["Authorization"] = accessTokenByCookie;

//   const confirmedUrl = ['/', '/member/login', '/member/join']
//   const pathname = appContext.router.pathname
//   console.log(pathname);
  
//   if ((accessTokenByCookie === "" || accessTokenByCookie === undefined) && !confirmedUrl.includes(pathname)) {
//     const { accessToken , refreshToken } = await getToken(appContext);
//     setToken(accessToken, refreshToken)
//     CustomAxios.defaults.headers.common["Authorization"] = accessToken;
//   }
//   if(!refreshTokenByCookie && !confirmedUrl.includes(pathname)){
    
//   }

//   // if (req?.url?.startsWith('/_next')) {
//   //   // serverSideProps로 호출된 경우 URL이 /_next로 시작함.
//   //   // EX: /_next/data/development/index.json
//   // }

//   const appProps = await App.getInitialProps(appContext)
//   return {...appProps}
// }

export default MyApp