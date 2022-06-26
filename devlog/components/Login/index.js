import * as S from "./styled";
import Link from "next/link";
// import { useState } from "react";

export default function Login() {
  //   const [Email, setEmail] = useState("");
  //   const [PassWord, setPassWord] = useState("");

  return (
    <S.LoginWapper>
      <Link href="/user/login">
        <S.LoginTitle>로그인</S.LoginTitle>
      </Link>
      <S.LoginInput>
        <p>Email</p>
        <input
          //   onChange={(e) => setEmail(e.target.value)}
          placeholder="Email을 입력하세요"
        />
      </S.LoginInput>
      <S.LoginInput>
        <p>PassWord</p>
        <input
          type="password"
          //   onChange={(e) => setPassWord(e.target.value)}
          placeholder="PassWord을 입력하세요"
        />
      </S.LoginInput>
      <S.LoginButton>Login</S.LoginButton>
      <Link href="user/register">
        <p>회원가입하거가기</p>
      </Link>
    </S.LoginWapper>
  );
}
