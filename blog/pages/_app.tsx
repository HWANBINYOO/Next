import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from 'recoil';
import cookies from "next-cookies";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import setToken from "../utils/lib/setToken";


const  MyApp = async ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return (
    <>
      <RecoilRoot>
        <Head>Devlog</Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;



export const  getInitialProps = async (ctx:any) => {  
  const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['accessToken'];
  if(accessTokenByCookie !== undefined) {
    const refreshTokenByCookie = (allCookies["refreshToken"] || "");
    setToken(accessTokenByCookie, refreshTokenByCookie)
  }
}