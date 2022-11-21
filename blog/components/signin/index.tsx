import * as S from "./styled";
import Link from "next/link";
import useLogin from "../../utils/lib/useLogin";
import { useRouter } from "next/router";
import CustomAxois from "../../utils/lib/CustomAxois";
import { useState } from "react";
import cookie from 'react-cookies'


export default function SignIn() {
  const [InputEmail, setInputEmail] = useState("");         //Eamil input value
  const [InputPassWord, setInputPassWord] = useState("");   //password ipnut value

  const router = useRouter();
  const expiresAcess = new Date()
  const expiresRef = new Date()
  expiresAcess.setDate(Date.now() + 60000 * 3)
  expiresRef.setDate(Date.now() + 60000 * 3)
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
    console.log(Blog_accessToken);
    CustomAxois.defaults.headers.common["Blog_accessToken"] = `${Blog_accessToken}`;
    CustomAxois.defaults.headers.common["Blog_refreshToken"] = `${Blog_refreshToken}`;

    cookie.save(
      'Blog_accessToken',
      Blog_accessToken,
      {
          path: '/',
          expires : expiresAcess,
          // httpOnly: true
      }
    )
    cookie.save(
      'Blog_refreshToken',
      Blog_refreshToken,
      {
          path: '/',
          expires : expiresRef,
          // httpOnly: true
      }
    )
    console.log(Blog_accessToken);
    
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

      router.push("/post");
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
