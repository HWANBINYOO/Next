import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [Name, setName] = useState("");

  return (
    <S.LoginWapper>
      <Link href="/register">
        <S.LoginTitle>회원가입</S.LoginTitle>
      </Link>
      <S.InputsWapper>
        <S.SignupInput>
          <p>Email</p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </S.SignupInput>
      </S.InputsWapper>
      <S.LoginButton>Signup</S.LoginButton>
      <Link href="/user/login">
        <p>로그인하러가기</p>
      </Link>
    </S.LoginWapper>
  );
}
