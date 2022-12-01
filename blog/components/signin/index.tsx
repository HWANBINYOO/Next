import * as S from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomAxois from "../../utils/lib/CustomAxois";
import { useState } from "react";
import {useSetToken} from "../../Hooks/useToken"
import { useRecoilState } from "recoil";
import { AuthorizationAtom } from "../../utils/recoil/state";

export default function SignIn() {
  const router = useRouter();
  const [InputEmail, setInputEmail] = useState("");
  const [InputPassWord, setInputPassWord] = useState("");
  const [Authorization , setAuthorization] = useRecoilState(AuthorizationAtom)

  const onLogin = async () => {
    try {
    const { data } = await CustomAxois.post(`auth/signin`, {
        email: InputEmail,
        password: InputPassWord,
      }
    );
    setAuthorization(data.accessToken)
    useSetToken(data.accessToken, data.refreshToken);
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
