import { commentType } from "../../types";
import CustomAxios from "../../utils/lib/CustomAxios";
import * as S from "./styled";

const Comment = ({name,contant,isMine,commentId}: commentType) => {

    const handleDelectClick = async () => {
        if(!isMine) return;
        try{
            const res = await CustomAxios.delete(`/comment/${commentId}`)
            console.log(res);
        }catch(e){
            console.log(e);
        }
    } 
    return(
        <S.CommentWapper>
            <S.Profile>
                <S.ProfileBox>
                    <S.ProfileImg></S.ProfileImg>
                    <S.UserName>{name || "익명"}</S.UserName>
                </S.ProfileBox>
                <S.ControlBox>
                    <div>수정</div>
                    <div onClick={handleDelectClick}>삭제</div>
                </S.ControlBox>
            </S.Profile>
            <S.Content>{contant}</S.Content>
        </S.CommentWapper>
    )
}

export default Comment;