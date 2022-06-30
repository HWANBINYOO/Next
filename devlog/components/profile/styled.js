import styled from "@emotion/styled";

export const Profile = styled.div`
  width: 100vw;
  height: 85vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ProfileImpormation = styled.div`
  width: 60%;
  height: 30vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0;
`;

export const ProfileImg = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 230px;
    height: 230px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const User = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto 0;
`;

export const EditGO = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const GOEdit = styled.div`
  font-size: 25px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const UserEmail = styled.div`
  color: gray;
  font-size: 40px;
`;

export const UserBlogs = styled.span`
  font-size: 35px;
`;

export const UserName = styled.span`
  font-size: 35px;
  font-weight: bold;
`;

export const uploadBlogs = styled.div`
  margin: 0 auto;
  gap: 50px;
  padding: 40px 0;
  margin: 0 auto;
  width: 85%;
  height: 2000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Hr = styled.hr`
  width: 85%;
  margin: 0 auto;
`;
