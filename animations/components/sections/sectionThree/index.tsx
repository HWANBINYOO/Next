import * as S from "./styled";
import { NextPage } from "next";
import { useRef, useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionThree:NextPage = () => {
    const [part1State , setPart1State] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPart1State(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionThreeWapper>
       <p style={{opacity : part1State ? "1" : "0"}} ref={setTarget}>useRef를 사용했다</p>
      </S.SectionThreeWapper>
  )
}

export default SectionThree;

