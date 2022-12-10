import { SignUp } from "../../components";
import { useEffect } from "react";
import { UseGeTokenDocument } from "../../Hooks/useToken";
import { useRouter } from "next/router";

export default function ResisterPage() {
  const router = useRouter();
  useEffect(() => {
    const {RefreshToken} = UseGeTokenDocument();
    if(RefreshToken){
      router.push('/post');
    }
  },[])
  return <SignUp />
}
