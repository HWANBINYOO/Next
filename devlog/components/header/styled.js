import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// export const Title = styled.p``;

export const HeaderTopWapper = styled.div`
  width: 100%;
  height: 12vh;

  a {
    font-size: 4rem;
  }
`;

export const HeaderRIght = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const EmptyWapper = styled.div``;

export const HeaderBottomWapper = styled.div`
  width: 100%;
  height: 3vh;

  display: flex;
  justify-content: center;
  gap: 20px;
`;
