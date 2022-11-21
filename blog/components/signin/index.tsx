import * as S from "./styled";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from '../../utils/recoil/state';
import useLogin from "../../utils/lib/useLogin";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import CustomAxois from "../../utils/lib/CustomAxois";
import { useState } from "react";
import cookie from 'react-cookies'


export default function SignIn() {
  const [InputEmail, setInputEmail] = useState("");         //Eamil input value
  const [InputPassWord, setInputPassWord] = useState("");   //password ipnut value
  const [cookies, setCookie] = useCookies(["Blog_accessToken", "Blog_refreshToken"]);

  const router = useRouter();
  const AccessToKenTime = 60000 * 3;  //3분
  const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일

  // const [email,setEmail] = useRecoilState(emailState);
  // const [password,setPassword] = useRecoilState<string>(passwordState);

  const onLogin = async () => {
    try {
    const { data } = await CustomAxois.post(
      `auth/signin`,
      {
        email: InputEmail,
        password: InputPassWord,
      }
    );
    const Blog_accessToken = data.accessToken;
    const Blog_refreshToken = data.refreshToken;
    axios.defaults.headers.common["Blog_accessToken"] = `${Blog_accessToken}`;
    axios.defaults.headers.common["Blog_refreshToken"] = `${Blog_refreshToken}`;

    cookie.save(
      'Blog_accessToken',
      Blog_accessToken,
      {
          path: '/',
          maxAge: AccessToKenTime,
          httpOnly: true
      }
    )
    cookie.save(
      'Blog_refreshToken',
      Blog_refreshToken,
      {
          path: '/',
          maxAge: RefreshTokenTime,
          httpOnly: true
      }
    )
      // setCookie("Blog_accessToken", Blog_accessToken, {
      //     path: "/Blog_accessToken",
      //     secure: true,
      //     sameSite: "none",
      //     maxAge : AccessToKenTime,
      //   });
      //   setCookie("Blog_refreshToken", Blog_refreshToken, {
      //     path: "/Blog_refreshToken",
      //     secure: true,
      //     sameSite: "none",
      //     maxAge : RefreshTokenTime,
      //   });

      // ctx.res.setHeader("Blog_accessToken", `${Blog_accessToken}; maxAge=${AccessToKenTime};`);
      // ctx.res.setHeader("Blog_refreshToken", `${Blog_refreshToken}; maxAge=${RefreshTokenTime};`);

      router.push("/board");
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <S.LoginWapper>
      <Link href="/auth/signin">
        <S.LoginTitle>로그인</S.LoginTitle>
      </Link>
      <S.InputsWapper>
        <S.LoginInput>
          <p>Email</p>
          <input
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Email을 입력하세요"
            value={InputEmail}
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setInputPassWord(e.target.value)}
            placeholder="PassWord을 입력하세요"
            value={InputPassWord}
          />
        </S.LoginInput>
      </S.InputsWapper>
      <S.LoginButton onClick={onLogin}>Login</S.LoginButton>
      <Link href="/auth/signup">
        <p>회원가입하거가기</p>
      </Link>
    </S.LoginWapper>
  );
}
