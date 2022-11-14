import styled from "@emotion/styled";


export const SectionFourWapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: #2f2f2f;


`;
export const TextWapper = styled.span`
  cursor: pointer;
  font-size: 100px;
  -webkit-text-stroke: 1px #f9f7f1;
  background-image: linear-gradient(0deg, #f9f7f1, #f9f7f1);
  background-clip:text;
  color: transparent;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in;
  background-position: 0% 0%;
  background-size: 0% 100%;

  &:hover{
    background-size: 100% 100%;
  filter: drop-shadow(0 0 5 px #f9f7f1);
  }
`;