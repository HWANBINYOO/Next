import * as S from "./styled";
import { useRouter } from "next/router";
import { NextApiRequest } from "next";

export default function Profile() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  // let accessToken = res.headers['Blog_accessToken'];
  // console.log(accessToken);
  
  return (
   <S.HomeWapper>
        프로필 페이지
   </S.HomeWapper>
  );
}