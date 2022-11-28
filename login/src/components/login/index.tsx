import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import CustomAxois from "../../../Util/CustomAxois";
import { useRouter } from "next/router";


export async function a(email:string , password:string){
  const AccessToKenTime = 60000 * 3;  //3분
  const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일

  try {
    const { data } = await CustomAxois.post(
      `/login`,
      {
        email: email,
        password: password,
      }
      );
      console.log(data);
      
    const Blog_accessToken = data.data.accessToken;
    const Blog_refreshToken = data.data.refreshToken;
    console.log(Blog_accessToken);
  
    document.cookie = `Authorization=${Blog_accessToken}; path=/; expires=${AccessToKenTime}`
    // ctx.res.setHeader('Set-Cookie', `token=${Blog_accessToken}; path=/;`)
    // res.setHeader("Blog_accessToken", `${data.accessToken}; maxAge=${AccessToKenTime};`);
    // res.setHeader("Blog_refreshToken", `${data.accessToken}; maxAge=${RefreshTokenTime};`);
    
  } catch (e: any) {
    console.error(e.message);
  }
}

export default function Login({ctx}: {ctx : any} ) {
  const [InputEmail, setInputEmail] = useState("");
  const [InputPassWord, setInputPassWord] = useState("");
  const router = useRouter();

  const onLogin = async () => {
    await a( InputEmail , InputPassWord)
    router.push('/me');
  };

  return (
    <S.LoginWapper>
      <Link href="/login">
        <S.LoginTitle>로그인</S.LoginTitle>
      </Link>
      <S.InputsWapper>
        <S.LoginInput>
          <p>Email</p>
          <input
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setInputPassWord(e.target.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.LoginInput>
      </S.InputsWapper>
      <S.LoginButton onClick={onLogin}>Login</S.LoginButton>
      <Link href="/join">
        <p>회원가입하거가기</p>
      </Link>
    </S.LoginWapper>
  );
}
