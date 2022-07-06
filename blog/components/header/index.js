import * as S from "./styled";
import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../../public/Img/profile.png";
import { useRouter } from "next/router";

export default function Header({ HeaderColor }) {
  const router = useRouter();

  const Logout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");
    console.log("로그아웃 되었습니다!");
    router.push("/");
    location.reload();
  };

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
          <S.LogoutButton onClick={Logout}>Logout</S.LogoutButton>
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
