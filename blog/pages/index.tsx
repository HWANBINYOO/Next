import { useRouter } from "next/router";
import { useEffect } from "react";
import { Home } from "../components";
import { UseIsToken } from "../Hooks/useToken";

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if(UseIsToken()){
      router.push('/post');
    }
  },[])
  return <Home />;
}

export default HomePage;
