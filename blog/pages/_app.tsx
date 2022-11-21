import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from 'recoil';
import cookies from "next-cookies";
import setToken from "../utils/lib/setToken";
import App, { AppContext, AppProps } from "next/app";
import getToken from "../utils/lib/getToken";


const  MyApp = async ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Head>Devlog</Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const {ctx} = appContext;
  const req = ctx.req;
  const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['accessToken'] || "";
  const refreshTokenByCookie = (allCookies["refreshToken"] || "");

  if (!(accessTokenByCookie === "" || accessTokenByCookie === undefined)) {
    if(!accessTokenByCookie || !refreshTokenByCookie){
      const { accessToken , refreshToken } = await getToken(appContext);
      setToken(accessToken, refreshToken)
    }
    setToken(accessTokenByCookie, refreshTokenByCookie)
  }

  if (req?.url?.startsWith('/_next')) {
    // serverSideProps로 호출된 경우 URL이 /_next로 시작함.
    // EX: /_next/data/development/index.json
  }


  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp;
