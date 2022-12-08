import { NextPage } from "next"
import { commentType } from "../../types";
import * as S from "./styled";



const Comment: NextPage = () => {
// const Comment: NextPage<{commentData:commentType}> = ({commentData}) => {

    return(
        <S.CommentWapper>
            <S.Profile>
                <S.ProfileBox>
                    <S.ProfileImg></S.ProfileImg>
                    <S.UserName>{"환빈"}</S.UserName>
                </S.ProfileBox>
                <S.ControlBox>
                    <div>수정</div>
                    <div>삭제</div>
                </S.ControlBox>
            </S.Profile>
            <S.Content>{"댓글달기댓글달기댓글달기"}</S.Content>
        </S.CommentWapper>
    )
}




export default Comment;