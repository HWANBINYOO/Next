import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { emailState, passwordState } from '../../utils/recoil/state';
import { useRecoilState } from "recoil";
import { GetServerSidePropsContext } from "next";
import CustomAxois from "../../../Util/CustomAxois";


export async function a(res: any , email:string , password:string){
  const AccessToKenTime = 60000 * 3;  //3분
  const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일
  // const [,email] = useRecoilState(emailState); 
  // const [,password] = useRecoilState<string>(passwordState);

  try {
    const { data } = await CustomAxois.post(
      `/login`,
      {
        email: email,
        password: password,
      }
      );
    const Blog_accessToken = data.accessToken;
    const Blog_refreshToken = data.refreshToken;
    res.setHeader("Blog_accessToken", `${Blog_accessToken}; maxAge=${AccessToKenTime};`);
    res.setHeader("Blog_refreshToken", `${Blog_refreshToken}; maxAge=${RefreshTokenTime};`);
    
  } catch (e: any) {
    console.error(e.message);
  }
}


export default function Login(res: any ) {
  const [InputEmail, setInputEmail] = useState("");         //Eamil input value
  const [InputPassWord, setInputPassWord] = useState("");   //password ipnut value

  const [,setEmail] = useRecoilState(emailState);
  const [,setPassword] = useRecoilState<string>(passwordState);

  const onLogin = async () => {
    a(res , InputEmail , InputPassWord)
    setEmail(InputEmail);
    setPassword(InputPassWord);
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
