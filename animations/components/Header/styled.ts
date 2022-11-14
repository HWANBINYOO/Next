import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
  width: 100%;
  height:80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
  gap: 30px;
  background-color: gray;
  z-index: 1000;
  position: sticky;
  top: -50px;

  a{
        color: white;
        font-size: 20px;
  }
`;