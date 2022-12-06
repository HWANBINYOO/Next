import * as S from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomAxios from "../../utils/lib/CustomAxios";
import { useState } from "react";
import { UseSetToken} from "../../Hooks/useToken"

export default function SignIn() {
  const router = useRouter();
  const [InputEmail, setInputEmail] = useState("");
  const [InputPassWord, setInputPassWord] = useState("");

  const handleClick = async () => {
    try {
    const { data } = await CustomAxios.post(`auth/signin`, {
        email: InputEmail,
        password: InputPassWord,
      }
    );
    const Authorization = data.accessToken
    const RefreshToken = data.refreshToken
    UseSetToken(Authorization, RefreshToken);
    router.push("/post");
    } catch (e) {
      console.error(e);
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
      <S.LoginButton onClick={handleClick}>Login</S.LoginButton>
      <Link href="/auth/signup">
        <p>회원가입하거가기</p>
      </Link>
    </S.LoginWapper>
  );
}
