import { NextPage } from "next";
import ProjectBox from "../projectBox";
import * as S from "./styled";


const ProjectFind:NextPage = () => {
    return(
        <S.ProjectFindWapper>
    <S.SortBtnWapper>
        <S.SortSlect>
            <option value={0}>직무</option>
            <option value={1}>front</option>
            <option value={2}>server</option>
            <option value={3}>Android</option>
            <option value={4}>IOS</option>
            <option value={5}>PM</option>
        </S.SortSlect>
        <S.SortSlect>
            <option value={0}>월급</option>
            <option value={1}>200-299</option>
            <option value={2}>300-399</option>
            <option value={3}>400-499</option>
            <option value={4}>500이상</option>
        </S.SortSlect>
    </S.SortBtnWapper>
                
    <S.ProjectBoxWapper>
        <ProjectBox title={"[원격] 한화 리조트 '체크인' 웹 - React.js"} job={"Web front Developers"} money={"400"} start_day={"2022-12-05"} time={3} />
    </S.ProjectBoxWapper>
    </S.ProjectFindWapper>
    )
}

export default ProjectFind;