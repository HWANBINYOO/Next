import { projectBoxProps } from "../../types/projectBoxProps";
import * as S from "./styled";



const ProjectBox = ({title , job , money , start_day , time} : projectBoxProps) => {
    return(
    <S.ProjectBoxWapper>
        <S.TopWapper>
            <span>{title}</span>
            <button>{job}</button>
        </S.TopWapper>
        <S.BottomWapper>
            <span>{`월급 : 약 ${money}만원`}</span>
            <span>{`시작일 ${start_day}`}</span>
            <span>{`기간 ${time}개월`}</span>
        </S.BottomWapper>
    </S.ProjectBoxWapper>
    )
}

export default ProjectBox;