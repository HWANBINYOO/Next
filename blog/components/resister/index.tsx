import * as S from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomAxois from "../../utils/lib/CustomAxois";
import axios from "axios";

export default function Register() {
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
      // const { data }: any = await CustomAxois.post("user/register", {
      //   name: Name,
      //   email: Email,
      //   password: PassWord,
      // });

      const { data } = await axios.post(
        `http://10.120.74.59:8081/user/register`,
        {
          name: Name,
        email: Email,
        password: PassWord,
        }
        );
      console.log(data);
      redirect("/user/login");
    } catch (e: any) {
      const { data } = e.response;
      console.error("data : ", data);
    }
  };

  return (
    <S.LoginWapper>
      <Link href="/register">
        <S.LoginTitle>회원가입</S.LoginTitle>
      </Link>
      <S.InputsWapper>
        <S.SignupInput>
          <p>Email</p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </S.SignupInput>
      </S.InputsWapper>
      <S.LoginButton onClick={onSignup}>Signup</S.LoginButton>
      <Link href="/user/login">
        <p>로그인하러가기</p>
      </Link>
    </S.LoginWapper>
  );
}
