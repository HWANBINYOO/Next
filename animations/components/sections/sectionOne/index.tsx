import * as S from "./styled";
import { NextPage } from "next";
import { useRef, useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionOne:NextPage = () => {
    // const [part1State , setPart1State] = useState(false);
    // const observer = useRef<IntersectionObserver | null>(null);

    // const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    //     setPart1State(isIntersecting)
    // };
    // const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionOneWapper>
        <p>안녕하세요</p>
      </S.SectionOneWapper>
  )
}

export default SectionOne;

