import "../styles/globals.css";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} pageProps={pageProps} />
    </>
  );
}

export default App;
