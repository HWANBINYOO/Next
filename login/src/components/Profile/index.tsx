import * as S from "./styled";
import { useRouter } from "next/router";
import { NextApiRequest } from "next";
import { profileProp } from "../../pages/me";

export default function Profile({userId , msg} : profileProp) {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  // let accessToken = res.headers['Blog_accessToken'];
  // console.log(accessToken);
  
  return (
   <S.HomeWapper>
      {
        userId && msg ? `${userId}번유저 * ${msg}` : msg
      }
   </S.HomeWapper>
  );
}