import styled from "styled-components";

export const LoginWapper = styled.div`
  padding-top: 7vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LoginTitle = styled.span`
  width: max-content;
  font-size: 5.5rem;
  line-height: 0.8;
  background-image: linear-gradient(transparent 60%, #e2b9ff 40%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const InputsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10vh;
  height: 50vh;
`;

export const LoginInput = styled.div`
  width: 80%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 2rem;
    font-weight: bold;
  }
  input {
    font-family: "SuncheonB";
    width: 60%;
    /* height: 10vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 1.5rem;
    resize: none;
    transition: all ease 0.3s 0s;
  }
  input:focus {
    border-color: #c8abc5;
    color: #c8abc5;
  }
`;

export const LoginButton = styled.button`
  font-family: "SuncheonB";
  width: 15%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: #e2b9ff;
  transition: all ease 0.2s 0s;
  font-weight: bold;

  &:hover {
    background-color: #daa7ff;
  }
`;
