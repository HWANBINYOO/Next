import * as S from "./styled";
import { NextPage } from "next";
import { useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionThree:NextPage = () => {
    const [partState , setPartState] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPartState(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionThreeWapper>
            <S.Box  style={{width: partState ? "100%" : "300px" , backgroundColor: partState ?  "grey" : "black"}} ref={setTarget}>
            <p style={{opacity : partState ? "1" : "0" , color : partState ? "#F5F5F5" : "black"}} >' IntersectionObserver ' 사용</p>
            </S.Box>
      </S.SectionThreeWapper>
  )
}

export default SectionThree;