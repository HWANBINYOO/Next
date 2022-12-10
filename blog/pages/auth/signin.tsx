import SignIn from "../../components/signin/index";
import { useEffect } from "react";
import { UseGeTokenDocument } from "../../Hooks/useToken";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    const {RefreshToken} = UseGeTokenDocument();
    if(RefreshToken){
      router.push('/post');
    }
  },[])
  return <SignIn />
}