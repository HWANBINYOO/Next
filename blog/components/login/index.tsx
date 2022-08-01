import { NextApiRequest, NextApiResponse } from 'next'
import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// import Storage from "../../utils/storage";

export default function Login(req: NextApiRequest, res: NextApiResponse) {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const router = useRouter();

  const onLogin = async () => {
    try {
      const { data } = await axios.post(
        `https://server.dev-log.kr/user/login`,
        {
          email: Email,
          password: PassWord,
        }
      );
      const Blog_accessToken = data.accessToken;
      const Blog_refreshToken = data.refreshToken;
      res.setHeader('Set-Cookie', `${Blog_accessToken}`);
      res.setHeader('Set-Cookie', `${Blog_accessToken}`);

      // Storage.setItem("Blog_accessToken", data.accessToken);
      // Storage.setItem("Blog_refreshToken", data.refreshToken);
      window.localStorage.setItem("Blog_accessToken", data.accessToken);
      window.localStorage.setItem("Blog_refreshToken", data.refreshToken);
      router.push("/board");
    } catch (e: any) {
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
