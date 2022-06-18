import Link from "next/link";
import * as S from "./styled";

export default function Promotion() {
  return (
    <>
      <S.Home>
        <h1>h1</h1>
        {/* <S.HelloPickture>
          <S.Img src={"/img/dhd.webp"} />
          <S.Img src={"/img/2977.jpg"} />
          <S.Img src={"/img/11.jpg"} />
          <S.Img src={"/img/piano.jpg"} />
          <S.Img src={"/img/song.png"} />
          <S.Img src={"/img/car.webp"} />
        </S.HelloPickture> */}
        {/* <S.GoLogin>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/register">
            <a>Signup</a>
          </Link>
        </S.GoLogin> */}
      </S.Home>
    </>
  );
}
