import { useRouter } from "next/router";
import { useEffect } from "react";
import { Home } from "../components";
import { UseGeTokenDocument } from "../Hooks/useToken";

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    const {RefreshToken} = UseGeTokenDocument();
    if(RefreshToken){
      router.push('/post');
    }
  },[])
  return <Home />;
}

export default HomePage;