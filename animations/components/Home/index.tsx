import * as S from "./styled";
import { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../Hook/useIntersectionObserver";
import SectionOne from "../sections/sectionOne";
import SectionTwo from "../sections/sectionTwo";
import SectionThree from "../sections/sectionThree";
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
  return (
    <S.HomeWapper>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </S.HomeWapper>
  );
}

export default Home;
