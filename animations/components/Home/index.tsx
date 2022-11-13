import * as S from "./styled";
import { NextPage } from "next";

const Home:NextPage = () => {
  return (
    <S.HomeWapper>
        <S.PartOne>안녕하세요</S.PartOne>
        <S.PartTwo>스크롤 이벤트 연습 중</S.PartTwo>
    </S.HomeWapper>
  );
}

export default Home;
