import styled from "@emotion/styled";

export const HomeWapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const HomeImgsWapper = styled.div`
  width: 850px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
  transition: all ease 0.2s 0s;
`;
