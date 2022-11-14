import styled from "@emotion/styled";


export const SectionTwoWapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`;

export const Box = styled.div`
    width: 300px;
    height: 300px;
    background-color: black;
    opacity: 0;
    transition: opacity ease-in-out 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
      opacity: 0;
      color: white;
      font-size: 70px;
    }
`;