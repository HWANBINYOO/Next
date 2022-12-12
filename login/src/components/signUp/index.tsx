import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomAxios from "../../utils/lib/CustomAxios";

export default function Signup() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");

  const onSignup = async () => {
    try {
      const { data } = await CustomAxios.post(`/member/join`, {
          email: Email,
          password: PassWord,
        }
      );
      console.log(data);
      redirect("/member/login");
    } catch (e: any) {
      const { data } = e.response;
      console.error("data : ", data);
    }
  };

  return (
    <S.LoginWapper>
      <Link href="/member/join">
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
      </S.InputsWapper>
      <S.LoginButton onClick={onSignup}>Signup</S.LoginButton>
      <Link href="/member/login">
        <p>로그인하러가기</p>
      </Link>
    </S.LoginWapper>
  );
}
