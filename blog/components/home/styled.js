import styled from "@emotion/styled";

export const HomeWapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 3rem;
`;

export const HomeImgsWapper = styled.div`
  width: 40vw;
  display: grid;
  height: 60vh;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, auto));
  transition: all ease 0.2s 0s;
`;

export const LoginWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  gap: 20px;

  a {
    font-size: 2rem;
    transition: all ease 0.2s 0s;
    line-height: 0.8;
    background-image: linear-gradient(transparent 60%, #e2b9ff 40%);
    background-repeat: no-repeat;
    background-size: 0% 100%;
  }

  a:hover {
    background-size: 100% 100%;
  }
`;
