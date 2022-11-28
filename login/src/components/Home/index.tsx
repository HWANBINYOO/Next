import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomAxois from "../../../Util/CustomAxois";

export default function SignUp() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [Name, setName] = useState("");
  const router = useRouter();
  const redirect = (url: string) => router.push(url);


  const onSignup = async () => {
    try {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const PassWordPegex = /(?=.*\d{1,50}).{4,50}$/;
      if (Email === "") return console.log("이메일이 입력되지 않았어요!");
      else if (!emailRegex.test(Email)) {
        return console.log("이메일 형식이 잘못됐어요!");
      } else if (PassWord === "") {
        return console.log("패스워드가 입력되지 않았어요!");
      } else if (!PassWordPegex.test(PassWord)) {
        return console.log("패스워드가 4자리 이상이려야해요!(숫자포함)");
      }

    const { data } = await CustomAxois.post(`join`,
        {
          name: Name,
          email: Email,
          password: PassWord,
        }
    );
      console.log(data);
      redirect("/auth/signin");
    } catch (e: any) {
      const { data } = e.response;
      console.error("data : ", data);
    }
  };

  return (
   <S.HomeWapper>
        <button>로그인</button>
        <button>회원가입</button>
   </S.HomeWapper>
  );
}
