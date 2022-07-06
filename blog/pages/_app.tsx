import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>Devlog</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
