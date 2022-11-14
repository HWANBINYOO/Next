import * as S from "./styled";
import { NextPage } from "next";
import { useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionFour:NextPage = () => {
    const [partState , setPartState] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPartState(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
    <S.SectionFourWapper>
          <p>엄청</p>
           <S.TextWapper style={{ backgroundSize: partState ? "100% 100%" : "0% 100%" , 
           filter: partState ?  "drop-shadow(0 0 5 px #f9f7f1)" : "none" }} ref={setTarget}>든든해진</S.TextWapper>
    </S.SectionFourWapper>
  )
}

export default SectionFour;