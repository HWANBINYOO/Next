import * as S from "./styled";
import { useRouter } from "next/router";
import { profileProp } from "../../pages/member/me";
import { UseRemoveToken } from "../../../Hooks/useToken";

export default function Profile({userId , msg} : profileProp) {
  const router = useRouter();
  const handleClick = () => {
    UseRemoveToken();
    router.push('/')
  }

  return (
   <S.Wapper>
      {
        userId && msg ? `${userId}번유저 * ${msg}` : msg
      }
      <button onClick={handleClick}>로그아웃</button>
   </S.Wapper>
  );
}