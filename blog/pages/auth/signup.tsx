import { SignUp } from "../../components";
import { useEffect } from "react";
import { UseIsToken } from "../../Hooks/useToken";
import { useRouter } from "next/router";

export default function ResisterPage() {
  const router = useRouter();
  useEffect(() => {
    if(UseIsToken()){
      router.push('/post');
    }
  },[])
  return <SignUp />
}
