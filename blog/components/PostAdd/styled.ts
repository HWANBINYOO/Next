import styled from "@emotion/styled";

export const BoardAddWapper = styled.div`
  width: 100vw;
  height: 80vh;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  margin-left: 6vw;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  textarea {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    outline: none;
    font-size: 3rem;
    resize: none;
  }
`;

export const DescInputBox = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  background-color: white;

  textarea {
    margin-top: 1rem;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    outline: none;
    font-size: 2rem;
    resize: none;
  }
`;

export const BoardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoardAddImgWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  margin-left: 6vw;
  label {
    position: relative;
    top: -30px;
    right: -120px;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 20px;
    border: none;
    color: black;
    cursor: pointer;
    transition: all ease 0.3s 0s;
    padding: 14px 20px 14px 20px;
    border-radius: 10px;
    background-color: #e2e7f2;
    &:hover {
      background-color: #c4cfe4;
    }
  }
`;

export const Today = styled.span`
  margin-left: 6vw;
  padding: 1.5rem 0;
`;

export const Button = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  margin-left: 6vw;
  background-color: #ffc895;
  border-radius: 10px;
  font-size: 2rem;
  border: none;
  width: 10rem;
  height: 5vh;
  text-align: center;
`;
