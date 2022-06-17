import styled from "@emotion/styled";

export const Positioner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/img/back.png");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 130px;

  img {
    width: 120px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  color: gray;
`;

export const ContentWapper = styled.div`
  height: 100px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 0 auto;

  span {
    cursor: pointer;
    text-decoration: underline;
    color: gray;
  }
`;

export const SigninBox = styled.div`
  width: 900px;
  height: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const inputBox = styled.div`
  width: 100%;
  height: 7vh;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  background-color: white;

  input {
    font-family: "EarlyFontDiary";

    transition: all ease 0.3s 0s;
    border: none;
    outline: none;
    font-size: 1.5rem;
    color: gray;
    &::-webkit-input-placeholder {
      color: gray;
    }
  }
  input:focus {
    color: black;
  }
`;

export const Btn = styled.button`
  font-family: "EarlyFontDiary";
  width: 200px;
  height: 60px;
  font-size: 2rem;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
  transition: all ease 0.3s 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Decs = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Id = styled.div`
  font-size: 1rem;
`;

export const GoSignUp = styled.div`
  color: gray;
  font-size: 1rem;
  text-decoration: underline;
`;
