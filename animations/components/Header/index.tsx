import * as S from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Header:NextPage = () => {
  // const router = useRouter();
  // const redirect = (url: string) => router.push(url);

  return (
    <S.HeaderWapper>
      <Link href={"/"}>Home</Link>
      <Link href={"/card"}>Card</Link>
      <Link href={"/About"}>About</Link>
    </S.HeaderWapper>
  );
}

export default Header;
