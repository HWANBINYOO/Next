import styled from "@emotion/styled";


export const SectionThreeWapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`;

export const Box = styled.div`
    width: 300px;
    height: 300px;
    background-color: purple;
    transition: all ease-in-out 1s 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;

    p{
      opacity: 0;
      color: white;
      transition: all ease-in 0.5s 1.5s;
      font-size: 70px;
    }
`;