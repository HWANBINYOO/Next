import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomAxois from "../../utils/lib/CustomAxois";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const router = useRouter();

  const onLogin = async () => {
    try {
      const { data } = await CustomAxois.post("/user/login", {
        email: Email,
        password: PassWord,
      });
      Storage.setItem("Blog_accessToken", data.accessToken);
      Storage.setItem("Blog_refreshToken", data.refreshToken);
      console.log(로그인);
      router.push("/board");
    } catch (e) {
      console.error(e.message);
    }
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
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
