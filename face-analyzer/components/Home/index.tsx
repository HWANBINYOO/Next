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
                <ImgWapper>
                  <Image  layout="fill"  src={imgBase64}  objectFit={'cover'} alt={'분석할 이미지'} />
                </ImgWapper>
              ) : ( <EmptyWapper/>)
          }
          <form
            name="files"
            method="post"
            encType="multipart/form-data"
          >

            <ImgChangeBtn>
            <div>
              <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
              />
              <label htmlFor="change_img">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
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
  background-color: #393E46;
  border: 1px solid white;
  border-radius: 20px;
`;

const ImgWapper = styled.div`
    position: relative;
    width: 450px;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    
    img{
       border-radius: 10px;
        cursor: pointer;
    }
`;

const Wapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color:#222831;
    /* background-image: url("/img/manyPaces.png");  */
    /* background-size: cover; */

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 50px;
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
  background-color: #00ADB5;
  color: white;

  &:hover{
    box-shadow: rgba(225, 225, 225, 0.25) 0px 50px 100px -20px, rgba(225, 225, 225, 0.3) 0px 30px 60px -30px, rgba(215, 215, 215, 0.35) 0px -2px 6px 0px inset;
  }
`;

const ImgProviewWapper  = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-left: 50px;

`;

const ImgChangeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    background-color: #EEEEEE;
    transition: border-radius ease-in-out 0.3s;
    color:black;
    &:hover{
      border-radius: 50%;
    }
    
    font-size: 10px;
    div{
        width: 30px;
        height: 30px;
      label {
        cursor: pointer;
        font-size: 20px;
      }

    }
      `;



export default Home;

