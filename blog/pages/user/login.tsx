import axios from "axios";
import { GetServerSidePropsContext, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Login from "../../components/login/index";
import { emailState, passwordState } from "../../utils/recoil/state";

export default function LoginPage(res: NextApiResponse,ctx: GetServerSidePropsContext) {
  const router = useRouter();
  const AccessToKenTime = 60000 * 3;  //3분
  const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일
  const [email] = useRecoilState(emailState); 
  const [password] = useRecoilState<string>(passwordState);

  async function a(){
    try {
      const { data } = await axios.post(
        `http://10.120.74.59:8081/user/login`,
        {
          email: email,
          password: password,
        }
      );
      const Blog_accessToken = data.accessToken;
      const Blog_refreshToken = data.refreshToken;
      ctx.res.setHeader("Blog_accessToken", `${Blog_accessToken}; maxAge=${AccessToKenTime};`);
      ctx.res.setHeader("Blog_refreshToken", `${Blog_refreshToken}; maxAge=${RefreshTokenTime};`);

      router.push("/board");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  return (
    <>
      <Login onClick={a}/>
    </>
  );
}