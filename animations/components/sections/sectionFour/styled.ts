import styled from "@emotion/styled";


export const SectionFourWapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: #2f2f2f;

    p{
      font-size: 50px;
      color: yellow;
      font-weight: bold;
    }

`;

export const TextWapper = styled.span`
  cursor: pointer;
  font-size: 150px;
  -webkit-text-stroke: 1px #f9f7f1;
  background-image: linear-gradient(0deg, #f9f7f1, #f9f7f1);
  background-clip:text;
  color: transparent;
  background-repeat: no-repeat;
  transition: background-size ease-in 0.8s;
  background-position: 0% 0%;
  background-size: 0% 100%;
`;