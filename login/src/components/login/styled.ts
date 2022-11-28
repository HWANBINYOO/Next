import styled from "@emotion/styled";

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
  font-size: 3rem;
`;

export const InputsWapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
`;

export const LoginInput = styled.div`
  width: 80%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  input {
    width: 60%;
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
    border-color: grey;
    color: grey;
  }
`;

export const LoginButton = styled.button`
  width: 15%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: grey;
  color: white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ;
  transition: all ease 0.2s 0s;
  font-weight: bold;

  &:hover {
    background-color: black;
  }
`;
