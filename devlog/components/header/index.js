import * as S from "./styled";
import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../../public/Img/profile.png";

export default function Header({ HeaderColor }) {
  return (
    <S.HeaderWapper>
      <S.HeaderTopWapper>
        <S.EmptyWapper />
        <Link href="/board">
          <a>DevLog </a>
        </Link>
        <S.HeaderRIght>
          <S.ProfileImg>
            <Image src={ProfileImg} />
          </S.ProfileImg>
          <S.LogoutButton>Logout</S.LogoutButton>
        </S.HeaderRIght>
      </S.HeaderTopWapper>
      <S.HeaderBottomWapper>
        <Link href="/board">
          <S.HeaderMenu
            style={{
              backgroundColor: `${
                HeaderColor === "skyblue" ? "#cafaff" : "white"
              }`,
            }}
          >
            Blog
          </S.HeaderMenu>
        </Link>
        <Link href="/about">
          <S.HeaderMenu
            style={{
              backgroundColor: `${
                HeaderColor === "purple" ? "#f1dcff" : "white"
              }`,
            }}
          >
            About
          </S.HeaderMenu>
        </Link>
      </S.HeaderBottomWapper>
    </S.HeaderWapper>
  );
}
