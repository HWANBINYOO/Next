import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>Devlog</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
