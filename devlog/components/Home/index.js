import * as S from "./styled";
import Image from "next/image";
import manImg from "../../public/Img/dhd.webp";
import mandarinImg from "../../public/Img/2977.jpg";
import songImg from "../../public/Img/song.png";
import pianoImg from "../../public/Img/piano.jpg";
import bolwingImg from "../../public/Img/bolwing.jpg";
import carImg from "../../public/Img/car.webp";

export default function Home() {
  return (
    <S.HomeWapper>
      <h1>블로그 홈페이지</h1>
      <S.HomeImgsWapper>
        <Image src={manImg} />
        <Image src={mandarinImg} />
        <Image src={songImg} />
        <Image src={pianoImg} />
        <Image src={bolwingImg} />
        <Image src={carImg} />
      </S.HomeImgsWapper>
    </S.HomeWapper>
  );
}
