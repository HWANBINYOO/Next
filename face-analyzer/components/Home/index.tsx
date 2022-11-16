import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Image from "next/image";
import { useRecoilState } from 'recoil';
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';
import { celebrityProps, FaceProps } from '../../types/analyzer';

const Home:NextPage = () => {
  const router = useRouter();
  const [file, setFile] = useState(""); //파일
  const [imgBase64, setImgBase64] = useRecoilState(imgBase64Atom); // 파일 base64
  const [celebrityList, setCelebrityList] = useRecoilState<celebrityProps[]>(celebrityListAtom); // 파일 base64
  const [faceList, setFaceList] = useRecoilState<FaceProps[]>(faceListAtom); // 파일 base64
  console.log(celebrityList);
  

    const handleChangeFile = (e: any) => {
        e.preventDefault();
        let reader = new FileReader();
    
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        };
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
          setFile(e.target.files[0]); // 파일 상태 업데이트
        }
      };
    
      const onSubmit = async (e: any) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", file);
        
        try {
            const response1 = await axios.post("v1/vision/celebrity", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  'X-Naver-Client-Id':process.env.NEXT_PUBLIC_ClientId,
                  "X-Naver-Client-Secret":process.env.NEXT_PUBLIC_ClientSecret,
                },
              });
              // console.log(response1.data.faces);
              setCelebrityList(response1.data.faces);
            const reponse2 = await axios.post("v1/vision/face", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                'X-Naver-Client-Id':process.env.NEXT_PUBLIC_ClientId,
                "X-Naver-Client-Secret":process.env.NEXT_PUBLIC_ClientSecret,
              },
            });
          console.log(reponse2.data.faces);
          console.log(reponse2.data);
          setFaceList(reponse2.data.faces);
          router.push(`/analyzer`);
          } catch (e: any) {
            console.error(e);
          }
      };

    return (
        <Wapper>
          {/* <ContentWapper> */}
          <ImgProviewWapper>
          {
              imgBase64 ? (
                  <Image width={450} height={400} src={imgBase64} alt={'분석할 이미지'} />
              ) : ( <EmptyWapper/>)
          }
          <form
            name="files"
            method="post"
            encType="multipart/form-data"
          >
            <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <ImgChangeBtn>
            <div>
              <label htmlFor="change_img">
                파일선택
              </label>
            </div>
             
            </ImgChangeBtn>
          </form>
          </ImgProviewWapper>

        <AnaBtn onClick={onSubmit}>분석하기</AnaBtn>
        {/* </ContentWapper> */}
        </Wapper>
    )
}

const EmptyWapper = styled.div`
  width: 450px;
  height: 400px;
  background-color: #EAEAEA;
`;

const Wapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color:white;
    /* background-image: url("/img/manyPaces.png");  */
    background-size: cover;
    /* background-color: rgba(255, 255, 255, 0.8); */

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const ContentWapper = styled.div`
width: 600px;
height: 680px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: darkgray;
    border-radius: 10px;
`;

const AnaBtn = styled.button`
  width: 250px;
  height: 70px;
  font-size: 32px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all ease-in-out 0.3s;

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const ImgProviewWapper  = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

`;

const ImgChangeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 450px;
    height: 50px;
    background-color: gray;
    color: white;
    font-size: 10px;
      label {
      width: 100%;
      height: 100%;
      cursor: pointer;
      font-size: 20px;
    }
`;



export default Home;

