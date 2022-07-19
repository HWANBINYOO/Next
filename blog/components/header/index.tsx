import * as S from "./styled";
import Link from "next/link";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import { useRouter } from "next/router";
import CustomAxois from "../../utils/lib/CustomAxois";
import { useEffect, useState } from "react";

export default function Header({ HeaderColor }: { HeaderColor: string }) {
  const [userId, setUserid] = useState("");
  const [profileImg, setprofileImg] = useState("");
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

  useEffect(() => {
    async function Getprofile() {
      try {
        const respone = await CustomAxois.get("/user_name");
        console.log(respone.data.user_id);
        setUserid(respone.data.user_id);
        setprofileImg(respone.data.url);
      } catch (e: any) {
        console.error(e.message);
      }
    }
    Getprofile();
  }, [router.query]);

  const Logout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");
    console.log("로그아웃 되었습니다!");
    window.location.replace("/user/login");
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
          <S.ProfileImg onClick={() => redirect(`/profile/${1}`)}>
            {
              profileImg ?
              <Image
              src={profileImg}
              width={35}
              height={35}
              alt="프로필 이미지"
              /> : 
              <Image
              src={profilenoneImg}
              width={35}
              height={35}
              alt="프로필 이미지"
              />
            }
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
