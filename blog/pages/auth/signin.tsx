import SignIn from "../../components/signin/index";
import { useEffect } from "react";
import { UseIsToken } from "../../Hooks/useToken";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    if(UseIsToken()){
      router.push('/post');
    }
  },[])
  return <SignIn />
}