import * as S from "./styled";
import { NextPage } from "next";
import { useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionTwo:NextPage = () => {
    const [part1State , setPart1State] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPart1State(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionTwoWapper>
        <S.Box style={{opacity : part1State ? "1" : "0" , width: part1State ? "300px" : "300px" , height : part1State ? "100vh" : "300px"}} ref={setTarget} >
            <p style={{opacity : part1State ? "1" : "0", transform: part1State ? "translateX(0px)" : "translateX(0)"}} >스크롤<br/> 이벤트 <br/>연습중</p>
        </S.Box>
      </S.SectionTwoWapper>
  )
}

export default SectionTwo;