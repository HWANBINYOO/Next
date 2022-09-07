import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from '../../utils/recoil/state';

export default function Login() {
  const [InputEmail, setInputEmail] = useState("");         //Eamil input value
  const [InputPassWord, setInputPassWord] = useState("");   //password ipnut value

  const [,setEmail] = useRecoilState(emailState);
  const [,setPassword] = useRecoilState<string>(passwordState);

  const onLogin = async () => {
    setEmail(InputEmail);
    setPassword(InputPassWord);
  };

  return (
    <S.LoginWapper>
      <Link href="/user/login">
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
      <Link href="/user/resister">
        <p>회원가입하거가기</p>
      </Link>
    </S.LoginWapper>
  );
}
