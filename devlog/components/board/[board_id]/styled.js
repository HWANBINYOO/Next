import styled from "@emotion/styled";

export const BlogIn = styled.div`
  width: 100vw;
  height: 80vh;
  /* border: 1px black solid; */

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 20px;
`;

export const TextBox = styled.div`
  width: 90%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  /* border: 1px black solid; */
  text-align: center;
`;

export const Title = styled.span`
  width: 80%;
  height: 30px;
  font-size: 3rem;
  font-weight: bold;
  /* border: 1px black solid; */
  text-align: center;
  padding: 3rem 0;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 40%;
  border-radius: 5px;
  /* height: 50%; */
  margin: 0 auto;
`;

export const desc = styled.div`
  width: 50%;
  height: 210px;
  font-size: 1.5rem;
  /* border: 1px black solid; */
  padding-top: 5rem;
  margin: 0 auto;
`;

export const date = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

export const BlogButtonBox = styled.div`
  width: max-content;
  height: max-content;
  position: fixed;
  right: 10vw;
  top: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  z-index: 100;
  gap: 1px;
  transition: all ease 0.25s 0s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const Button = styled.button`
  /* display: none; */
  z-index: -10;
  width: 4rem;
  height: 1.3rem;
  background-color: ${(props) => props.backgroundColor};
  outline: none;
  border-radius: 10px;
  /* border: 1px black solid; */
  border: none;
  font-size: 0.3rem;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

export const NameDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding-right: 29vw;
`;

export const ProfileWapper = styled.div`
  width: 30%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  padding: 20px 50px;
  gap: 50px;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileName = styled.span`
  font-size: 2rem;
`;
