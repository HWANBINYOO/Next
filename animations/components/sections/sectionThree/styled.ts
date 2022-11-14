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
    height: 100vh;
    background-color: black;
    transition: all ease-in-out 0.5s 1s;

    display: flex;
    align-items: center;
    justify-content: center;

    p{
      opacity: 0;
      color: black;

      transition: color ease-in 0.5s 1.3s;
      transition: opacity ease-in 0.1s 1.8s;
      font-size: 90px;
      font-weight: bold;
    }
`;