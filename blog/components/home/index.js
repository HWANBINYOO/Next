import * as S from "./styled";
import Image from "next/image";
import Link from "next/link";
import manImg from "../../public/Img/dhd.webp";
import mandarinImg from "../../public/Img/2977.jpg";
import songImg from "../../public/Img/song.png";
import pianoImg from "../../public/Img/piano.jpg";
import bolwingImg from "../../public/Img/bolwing.jpg";
import carImg from "../../public/Img/car.webp";

export default function Home() {
  return (
    <S.HomeWapper>
      <S.Title>Devlog</S.Title>
      <S.HomeImgsWapper>
        <Image src={manImg} objectFit="cover" />
        <Image src={mandarinImg} objectFit="cover" />
        <Image src={songImg} objectFit="cover" />
        <Image src={pianoImg} objectFit="cover" />
        <Image src={bolwingImg} objectFit="cover" />
        <Image src={carImg} objectFit="cover" />
      </S.HomeImgsWapper>
      <S.LoginWapper>
        <Link href="/user/login">
          <a>Login</a>
        </Link>
        <Link href="/user/resister">
          <a>Signup</a>
        </Link>
      </S.LoginWapper>
    </S.HomeWapper>
  );
}
