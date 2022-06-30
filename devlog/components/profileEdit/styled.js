import styled from "@emotion/styled";

export const Profile = styled.div`
  width: 40%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0 15%;
  border-radius: 10px;
`;

export const ProfileImgEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding: 50px 0 0 0;
  label {
    position: relative;
    top: -50px;
    right: -50px;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 25px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    transition: all ease 0.1s 0s;
    padding: 7px;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    transition: all ease 0.2s 0s;
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
`;

export const EditI = styled.form`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  margin: 20px 0;
  span {
    width: 45%;
  }
`;

export const EditInput = styled.input`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  color: gray;
  font-size: 30px;
  border: none;
  outline: none;
  text-align: end;
  padding-right: 10%;
  width: 55%;

  &:focus {
    color: black;
  }
  .passWord {
    font-family: "Spoqa Han Sans";
    &::placeholder {
      font-family: "GangwonEduSaeeum_OTFMediumA";
    }
  }
`;
export const EditInputPW = styled.input`
  color: gray;
  font-size: 25px;
  border: none;
  outline: none;
  text-align: end;
  padding: 5px 10% 5px 0;
  width: 55%;

  &:focus {
    color: black;
  }
  &::placeholder {
    font-family: "GangwonEduSaeeum_OTFMediumA";
  }
`;

export const ButtonS = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 0;
`;
export const Btn = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  background-color: ${(props) => props.color};
  width: 170px;
  height: 45px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding-top: 10px;
  transition: all ease 0.1s 0s;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Modal = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all ease-in-out 0.3s 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const ModalContainal = styled.div`
  position: fixed;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 680px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  border: 0px solid black;
  border-radius: 15px;
  transition: all ease-in-out 0.3s 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  img {
    background-color: white;
    width: 70%;
    height: 60%;
    border: 0px solid black;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 30px;
    width: 250px;
    height: 60px;
    border-radius: 10px;
    background-color: white;
  }
`;
