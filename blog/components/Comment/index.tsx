import { NextPage } from "next"
import { commentType } from "../../types";
import * as S from "./styled";



// const Comment: NextPage = () => {
const Comment = ({name,contant}: {name:string,contant:string}) => {
    return(
        <S.CommentWapper>
            <S.Profile>
                <S.ProfileBox>
                    <S.ProfileImg></S.ProfileImg>
                    <S.UserName>{name || "익명"}</S.UserName>
                </S.ProfileBox>
                <S.ControlBox>
                    <div>수정</div>
                    <div>삭제</div>
                </S.ControlBox>
            </S.Profile>
            <S.Content>{contant}</S.Content>
        </S.CommentWapper>
    )
}

export default Comment;