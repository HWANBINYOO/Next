import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Image from "next/image";
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';
import { celebrityProps, FaceProps } from '../../types/analyzer';

const Analyzer:NextPage = () => {
const router = useRouter();
const [imgBase64, setImgBase64] = useRecoilState(imgBase64Atom);
const [celebrityList,] = useRecoilState<celebrityProps>(celebrityListAtom);
const [faceList,] = useRecoilState<FaceProps>(faceListAtom);
const resetcelebrityList = useResetRecoilState(celebrityListAtom);
const resetFaceList = useResetRecoilState(faceListAtom);
const onClick = () => {
  setImgBase64("");
  resetcelebrityList
  resetFaceList
  router.push("/");
}

const Usepercentage = (n:number) => (n*100).toFixed(1)

console.log(Usepercentage(celebrityList.celebrity.confidence));

    return (
        <Wapper>
        {
            imgBase64 ? (
              <ImgWapper>
                <Image  layout="fill" objectFit={'cover'} src={imgBase64} alt={''} />
              </ImgWapper>
            ) : ( <p>?</p> )
        }

        <ContentWapper>
          <Content>
          {`나이:  ${faceList.age.value}세 (${Usepercentage(faceList.age.confidence)})%`}
          </Content>
          <Content>
          {`성별 : ${ faceList.gender.value === "male" ? "남자" : "여자" } (${Usepercentage(faceList.gender.confidence)})%`}
          </Content>
          <Content>
          {`표정 : ${ faceList.emotion.value}`}
          </Content>
          <Content>
          {`닮은사람: ${celebrityList.celebrity.value} (${Usepercentage(celebrityList.celebrity.confidence)})%`}
          </Content>
        <button onClick={onClick}>다른사진선택하기</button>
        </ContentWapper>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color:#222831;
     
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const ImgWapper = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    
    img{
       border-radius: 10px;
        cursor: pointer;
    }
`;

const ContentWapper = styled.div`
  width: 500px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
`;

const Content = styled.div`
    font-size: 30px;
    color: white;
`;

export default Analyzer;

