import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
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
