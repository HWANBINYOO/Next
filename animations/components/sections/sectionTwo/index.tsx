import * as S from "./styled";
import { NextPage } from "next";
import { useRef, useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionTwo:NextPage = () => {
    const [part1State , setPart1State] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPart1State(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionTwoWapper>
       <p style={{opacity : part1State ? "1" : "0"}} ref={setTarget}>스크롤 이벤트 연습중</p>
      </S.SectionTwoWapper>
  )
}

export default SectionTwo;

