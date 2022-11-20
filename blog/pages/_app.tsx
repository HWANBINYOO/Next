import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <RecoilRoot>
        <CookiesProvider>
        <Head>Devlog</Head>
        <Component {...pageProps} />
        </CookiesProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
