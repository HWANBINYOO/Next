import * as S from "./styled";
import { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../Hook/useIntersectionObserver";
    // const [scrollY, setScrollY] = useState(0);
    // const partOneRef = useRef<any>();
    // const onScroll = useCallback((event:any) => {
    //     const { scrollY } = window;
    //     console.log("scrollY", scrollY);
    //     setScrollY(window.pageYOffset);
    //     if(scrollY > 830){
    //         partOneRef.current.style = "visibility: visible; transform:translateX(-650px)"
    //     }
    //     else{
    //         partOneRef.current.style ="none";
    //     }
    // }, []);
    // useEffect(() => {
    //     window.addEventListener('scroll', onScroll)
    //     return () => window.removeEventListener('scroll', onScroll)
    // })

const Home:NextPage = () => {
    const [part1State , setPart1State] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        setPart1State(isIntersecting)
    };
    const { setTarget } = useIntersectionObserver({ onIntersect });



  return (
    <S.HomeWapper>
        <S.PartOne>안녕하세요</S.PartOne>
        <S.PartTwo><p style={{opacity : part1State ? "1" : "0"}} ref={setTarget}>스크롤 이벤트 연습 중</p></S.PartTwo>
    </S.HomeWapper>
  );
}

export default Home;
