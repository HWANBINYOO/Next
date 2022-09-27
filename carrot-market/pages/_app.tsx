import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig} from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
      value={{
        // refreshInterval:2000 2초마다 새로고침 
        fetcher :(url:string) => 
          fetch(url).then(reponse => reponse.json()),
      }}
    >
      <div className='w-full max-w-xl mx-auto '>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  )
}

export default MyApp
