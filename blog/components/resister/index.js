import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [Name, setName] = useState("");
  const router = useRouter();

  const onSignup = async () => {
    try {
      if (Email === "") return console.log("이메일이 입력되지 않았어요!");
      else if (PassWord === "")
        return console.log("패스워드가 입력되지 않았어요!");
      else if (PassWord !== PassWordCheck)
        return console.log("패스워드가 일치하지 않아요");
      const { data } = await customAxios.post("user/resister", {
        email: Email,
        password: PassWord,
      });
      console.log(data);
      router.push("/login");
    } catch (e) {
      console.log(e.message);
    }
  };

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
      <S.LoginButton onClick={onSignup}>Signup</S.LoginButton>
      <Link href="/user/login">
        <p>로그인하러가기</p>
      </Link>
    </S.LoginWapper>
  );
}
