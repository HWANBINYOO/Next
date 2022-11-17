import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Image from "next/image";
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';
import { celebrityProps, expressionProps, FaceProps } from '../../types/analyzer';
import { expressionData } from '../../meta/expression';
import { toast } from "react-toastify";
import { useEffect } from 'react';


const Analyzer:NextPage = () => {
const router = useRouter();
const [imgBase64, setImgBase64] = useRecoilState(imgBase64Atom);
const [celebrityList,] = useRecoilState<celebrityProps>(celebrityListAtom);
const [faceList,] = useRecoilState<FaceProps>(faceListAtom);
const resetcelebrityList = useResetRecoilState(celebrityListAtom);
const resetFaceList = useResetRecoilState(faceListAtom);
const expressionKname:expressionProps[] = expressionData.filter(i => faceList.emotion.value === i.value);
const onClick = () => {
  setImgBase64("");
  resetcelebrityList
  resetFaceList
  router.push("/");
}
const Usepercentage = (n:number) => (n*100).toFixed(1);
useEffect(() => {
  if(!imgBase64){
    toast('메인페이지로 이동합니다', { hideProgressBar: true, autoClose: 1000, type: 'info' })
    onClick()
  }
},[])

    return (
      <>
        <Wapper>
        {
            imgBase64 ? (
              <ImgWapper>
                <Image  layout="fill" objectFit={'cover'} src={imgBase64} alt={'분석이미지'} />
              </ImgWapper>
            ) : ( <p>?</p> )
        }
        <ContentWapper>
          <Content>
          {`나이 :  ${faceList.age.value}세 (${Usepercentage(faceList.age.confidence)}%)`}
          </Content>
          <Content>
          {`성별 : ${ faceList.gender.value === "male" ? "남자" : faceList.gender.value ==="child" ? "어린이" : "여자"} (${Usepercentage(faceList.gender.confidence)}%)`}
          </Content>
          <Content>
          {`표정 : ${ expressionKname[0]?.Kvalue}표정 (${Usepercentage(faceList.emotion.confidence)}%)`}
          </Content>
          <Content>
          {`닮은사람: ${celebrityList.celebrity.value} (${Usepercentage(celebrityList.celebrity.confidence)}%)`}
          </Content>
        </ContentWapper>
        </Wapper>
        <OtherBtn onClick={onClick}>다른사진선택하기</OtherBtn>
      </>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    background-color:#222831;
     
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

`;

const ImgWapper = styled.div`
    position: relative;
    width: 30%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    
    img{
       border-radius: 10px;
        cursor: pointer;
    }
    @media (max-width: 768px) {
    width: 60%;
    height: 40%;
  }
`;

const ContentWapper = styled.div`
  width: 500px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  align-items: flex-start;
  justify-content: center;
    gap: 20px;
    width: 80%;
    height: 40%;
    margin-left: 70px;
  }
`;

const Content = styled.div`
    font-size: 30px;
    color: white;
    @media (max-width: 768px) {
      font-size: 15px;
  }
`;

const OtherBtn = styled.button`
  width: 15%;
  height: 70px;
  position: fixed;
  bottom: 59px;
  left: 42.5vw;
  font-size: 25px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(232, 232, 232, 0.2) 0px 8px 24px;
  transition: all ease-in-out 0.3s;
  background-color: #00ADB5;
  color: white;
  @media (max-width: 768px) {
    width: 45%;
    height: 45px;
    font-size: 15px;
    left: 27vw;
    bottom: 39px;
  }

  &:hover{
    box-shadow: rgba(225, 225, 225, 0.25) 0px 50px 100px -20px, rgba(225, 225, 225, 0.3) 0px 30px 60px -30px, rgba(215, 215, 215, 0.35) 0px -2px 6px 0px inset;
    border: 1px solid white;
  }
`;

export default Analyzer;
