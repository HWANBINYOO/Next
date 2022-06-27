import * as S from "./styled";
// import Link from "next/link";
import Image from "next/image";
import catImg from "../../public/Img/cat.jpg";
import penguinImg from "../../public/Img/penguin.jpg";
import greernImg from "../../public/Img/geern.jpg";
import oneImg from "../../public/Img/cat.jpg";
import twoImg from "../../public/Img/kot.jpg";
import threeImg from "../../public/Img/kot.jpg";
import fourImg from "../../public/Img/11.jpg";
import fiveImg from "../../public/Img/bikeman.jpg";
import sixImg from "../../public/Img/song.png";
import sevenImg from "../../public/Img/bolwing.jpg";
import eightImg from "../../public/Img/piano.jpg";

export default function About() {
  return (
    <S.AboutWapper>
      <S.IntrudeceWapper>
        <S.Intrudece>
          <Image src={catImg} width={300} height={400} />
          <p>김성길</p>
          안녕하세요 서버 공부하는 김성길입니다
          <br />
          프레임 워크는 스프링 부트를 이용하였고
          <br />
          프로젝트 나랑 같이 할 사람 성길#0091 연락 ㄱㄱ
          <br />
          성길tv 구독 좋아요
        </S.Intrudece>
        <S.Intrudece>
          <Image src={penguinImg} width={300} height={400} />
          <p>유환빈</p>
          안녕하세요
          <br />
          지금 Ts 공부하고 있어요
          <br />
          react 값넘기는거랑 Ts 타입주는거 연습하기 위해서 만들어봤어요
          <br />
          자격증은 컴활2급있고 산업기사 딸려고요 (3월26일)
        </S.Intrudece>
      </S.IntrudeceWapper>
      <S.AboutContents>
        <S.AboutContent>
          <Image width={200} height={200} src={greernImg} />
          <S.decs>
            <p>제가 제일 좋아하는 과일</p>
            <p>청포도</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={twoImg} />
          <S.decs>
            <p>제가 제일 좋아하는 과일</p>
            <p>귤</p>
            <p>겨울에 거의 매일먹어요</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={threeImg} />
          <S.decs>
            <p>제가 좋아하는 음식</p>
            <p>떡볶이</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={fourImg} />
          <S.decs>
            <p>제가 좋아하는 음식</p>
            <p>초밥</p>
            <p>그중에서 연어초밥을가장 좋아해요</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={fiveImg} />
          <S.decs>
            <p>제가 좋아하는 취미</p>
            <p>자전거</p>
            <p>주말마다 맨날타요</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={sixImg} />
          <S.decs>
            <p>음악감상이 취미</p>
            <p>주로 팝송을 들어요</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={sevenImg} />
          <S.decs>
            <p>볼링치는걸 좋아해요</p>
            <p>100점은 그냥 넘기죠</p>
          </S.decs>
        </S.AboutContent>
        <S.AboutContent>
          <Image width={200} src={eightImg} />
          <S.decs>
            <p>치아노치기가 취미</p>
            <p>주로 클래식곡 쳐요</p>
            <p>리스트 사랑의꿈까지 칠줄알아요</p>
          </S.decs>
        </S.AboutContent>
      </S.AboutContents>
    </S.AboutWapper>
  );
}
