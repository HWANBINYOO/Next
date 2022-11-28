import * as S from "./styled";
import { useRouter } from "next/router";
import { NextApiRequest } from "next";
import { profileProp } from "../../pages/member/me";

export default function Profile({userId , msg} : profileProp) {
  const router = useRouter();
  
  return (
   <S.HomeWapper>
      {
        userId && msg ? `${userId}번유저 * ${msg}` : msg
      }
   </S.HomeWapper>
  );
}