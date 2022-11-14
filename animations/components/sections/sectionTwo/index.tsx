import * as S from "./styled";
import { NextPage } from "next";
import { useState } from "react";
import useIntersectionObserver from "../../../Hook/useIntersectionObserver";

const SectionTwo:NextPage = () => {
    const [partState , setPartState] = useState(false);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPartState(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });

  return(
      <S.SectionTwoWapper>
        <S.Box style={{opacity : partState ? "1" : "0" , width: partState ? "300px" : "300px" , height : partState ? "100vh" : "300px"}} ref={setTarget} >
            <p style={{opacity : partState ? "1" : "0", transform: partState ? "translateX(0px)" : "translateX(0)"}} >스크롤<br/> 이벤트 <br/>연습중</p>
        </S.Box>
      </S.SectionTwoWapper>
  )
}

export default SectionTwo;