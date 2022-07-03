import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// export const Title = styled.p``;

export const HeaderTopWapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  padding: 0 2.5%;
  align-items: center;

  a {
    font-size: 4rem;
  }
`;

export const HeaderRIght = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
`;

export const ProfileImg = styled.span`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
  object-fit: cover;
`;

export const EmptyWapper = styled.div`
  width: 120px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  font-family: "GangwonEduSaeeum_OTFMediumA";
  background-color: black;
  color: white;
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

export const HeaderBottomWapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const HeaderMenu = styled.span`
  width: 150px;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 10px;

  font-size: 1.5rem;
  transition: all ease 0.5s 0s;
`;
