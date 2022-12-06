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
        <Image src={manImg} objectFit="cover" alt="홈 이미지" />
        <Image src={mandarinImg} objectFit="cover" alt="홈 이미지" />
        <Image src={songImg} objectFit="cover" alt="홈 이미지" />
        <Image src={pianoImg} objectFit="cover" alt="홈 이미지" />
        <Image src={bolwingImg} objectFit="cover" alt="홈 이미지" />
        <Image src={carImg} objectFit="cover" alt="홈 이미지" />
      </S.HomeImgsWapper>
      <S.LoginWapper>
        <Link href="/auth/signin">
          <a>Login</a>
        </Link>
        <Link href="/auth/signup">
          <a>Signup</a>
        </Link>
      </S.LoginWapper>
    </S.HomeWapper>
  );
}
