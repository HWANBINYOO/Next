import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from 'recoil';
import { AppProps } from "next/app";

const  MyApp = ({ Component, pageProps }: AppProps) => {
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
