import styled from "@emotion/styled";


export const ProjectFindWapper = styled.div`
    width: 100%;
    height: 85%;

    padding: 0px 10%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;



export const SortBtnWapper = styled.nav`
    width: 30%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 30px;
    padding: 20px 0;

    border: 1px solid black;
`;


export const SortSlect = styled.select`
    width: 100px;
    height: 30px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
`;

export const ProjectBoxWapper = styled.div`
    width: 100%;
    padding: 0px 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;