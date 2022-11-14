import * as S from "./styled";
import { NextPage } from "next";
import { useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionThree:NextPage = () => {
    const [part1State , setPart1State] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPart1State(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionThreeWapper>
            <S.Box  style={{width: part1State ? "800px" : "300px" , height : part1State ? "300px" : "100vh" , backgroundColor: part1State ?  "gray" : "black"}} ref={setTarget}>
            <p style={{opacity : part1State ? "1" : "0"}} >Ref 사용</p>
            </S.Box>
      </S.SectionThreeWapper>
  )
}

export default SectionThree;