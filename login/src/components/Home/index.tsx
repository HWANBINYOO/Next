import * as S from "./styled";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomAxois from "../../utils/lib/CustomAxois";

export default function Home() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

  return (
   <S.HomeWapper>
        <button onClick={() => redirect('/login')} >로그인</button>
        <button onClick={() => redirect('/join')}>회원가입</button>
   </S.HomeWapper>
  );
}
