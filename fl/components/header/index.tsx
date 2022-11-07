import { NextPage } from "next";
import * as S from "./styled";


const Header:NextPage = () => {
    return(

    <S.HeaderWapper>
        <S.Nav>
            <S.Title>FL</S.Title>
            <S.LinkWapper>프로젝트 찾기</S.LinkWapper>
            <S.LinkWapper>마이페이지</S.LinkWapper>
        </S.Nav>

        <S.SignsWapper>
            <S.SignInBtn>로그인</S.SignInBtn>
            <S.SignInBtn>회원가입</S.SignInBtn>
        </S.SignsWapper>
    </S.HeaderWapper>
    )
}

export default Header