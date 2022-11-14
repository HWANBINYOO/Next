import styled from "@emotion/styled";

export const HomeWapper = styled.div`
  width: 100%;
  height:5000px;
  display: flex;
  flex-direction: column;
`;

export const PartOne = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 30px;
    /* border: 1px solid black; */
`;

export const PartTwo = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    /* border: 1px solid black; */

    p{
      background-color: antiquewhite;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      font-size: 70px;
    }
`;