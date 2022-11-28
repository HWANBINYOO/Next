import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import CustomAxois from "../../utils/lib/CustomAxois";
import { useRouter } from "next/router";
import setToken from "../../utils/lib/setToken";

export default function Login() {
  const [InputEmail, setInputEmail] = useState("");
  const [InputPassWord, setInputPassWord] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    try {
      const { data } = await CustomAxois.post(`/member/login`,{
          email: InputEmail,
          password: InputPassWord,
        }
      );
      setToken(data.data.accessToken , data.data.refreshToken)
      router.push('/member/me');
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <S.LoginWapper>
      <Link href="/login">
        <S.LoginTitle>로그인</S.LoginTitle>
      </Link>
      <S.InputsWapper onSubmit={handleClick}>
        <S.LoginInput>
          <p>Email</p>
          <input
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setInputPassWord(e.target.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.LoginInput>
      </S.InputsWapper>
      <S.LoginButton onClick={handleClick}>Login</S.LoginButton>
      <Link href="/member/join">
        <p>회원가입하러가기</p>
      </Link>
    </S.LoginWapper>
  );
}
