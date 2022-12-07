import "../styles/globals.css";
import { RecoilRoot } from 'recoil';
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SWRConfig } from 'swr';
import CustomAxios from "../utils/lib/CustomAxios";

const  MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
     <SWRConfig
      value={{
        fetcher :(url:string) => 
        CustomAxios.get(url).then((response) => response.data),
      }}
    >
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
      </SWRConfig>
    </>
  );
}

export default MyApp;
