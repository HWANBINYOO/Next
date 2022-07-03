import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import CustomAxois from "../../lib/CustomAxois";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [cookies, setCookie] = useCookies(["AccessToken", "RefreshToken"]);
  const router = useRouter();

  const onLogin = async () => {
    try {
      const { data } = await CustomAxois.post("/user/login", {
        email: Email,
        password: PassWord,
      });
      console.log(data);
      localStorage.setItem("Blog_accessToken", data.accessToken);
      localStorage.setItem("Blog_refreshToken", data.refreshToken);

      // setCookie("AccessToken", data.accessToken, {
      //   path: "/accessToken",
      //   secure: true,
      //   sameSite: "none",
      // });
      // setCookie("RefreshToken", data.refreshToken, {
      //   path: "/refreshToken",
      //   secure: true,
      //   sameSite: "none",
      // });
      log(로그인);
      router.push("/");
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
