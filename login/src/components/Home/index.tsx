import * as S from "./styled";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

  return (
   <S.HomeWapper>
        <button onClick={() => redirect('/member/login')}>로그인</button>
        <button onClick={() => redirect('/member/join')}>회원가입</button>
   </S.HomeWapper>
  );
}
