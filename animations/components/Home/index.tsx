import * as S from "./styled";
import { NextPage } from "next";
import { SectionOne , SectionTwo , SectionThree } from "../sections/index";
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
