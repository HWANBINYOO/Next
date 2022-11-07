import styled from "@emotion/styled";


export const ProjectBoxWapper = styled.div`
    width: 1100px;
    height: 180px;

    padding: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
`;



export const TopWapper = styled.div`
    height: 50%;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;


    span {
        width: 800px;
        font-size: 20px;
    }

    button {
        width: 160px;
        height: 25px;
        border: none;
        background-color: #8B8B8B;
        color: white;
        font-size: 13px;
        border-radius: 5px;
    }
`;


export const BottomWapper = styled.div`
    height:  40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
    padding-left: 50px;
    font-size: 21px;
`;