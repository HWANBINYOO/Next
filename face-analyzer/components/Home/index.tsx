import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Image from "next/image";
import { useRecoilState } from 'recoil';
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';
import { celebrityProps, FaceProps } from '../../types/analyzer';
import { toast } from "react-toastify";

const Home:NextPage = () => {
  const router = useRouter();
  const [file, setFile] = useState("");
  const [imgBase64, setImgBase64] = useRecoilState(imgBase64Atom);
  const [, setCelebrityList] = useRecoilState<celebrityProps>(celebrityListAtom);
  const [, setFaceList] = useRecoilState<FaceProps>(faceListAtom);

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
      if(!file) return toast('이미지가 선택되지 않았어요', { hideProgressBar: true, autoClose: 1000, type: 'error' })
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
          const reponse2 = await axios.post("v1/vision/face", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              'X-Naver-Client-Id':process.env.NEXT_PUBLIC_ClientId,
              "X-Naver-Client-Secret":process.env.NEXT_PUBLIC_ClientSecret,
            },
          });
          
          if(response1.data.faces[0] && reponse2.data.faces[0]){
            setCelebrityList(response1.data.faces[0]);
            setFaceList(reponse2.data.faces[0]);
            router.push(`/analyzer`);
          } else{
            return toast('부적절한 사진입니다', { hideProgressBar: true, autoClose: 1000, type: 'error' })
          }
        } catch (e: any) {
          return toast(e.response.data.errorMessage, { hideProgressBar: true, autoClose: 1000, type: 'error' })
        }
    };

    return (
        <Wapper>
          <ImgProviewWapper>
          {
              imgBase64 ? (
                <ImgWapper>
                  <Image  layout="fill" objectFit={'cover'}  src={imgBase64} alt={'분석할 이미지'} />
                </ImgWapper>
              ) : ( <EmptyWapper/>)
          }
          <ImgChangeBtn>
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
              <label htmlFor="change_img">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              </label>
          </form>
            </ImgChangeBtn>
          </ImgProviewWapper>

        <AnaBtn onClick={onSubmit}>분석하기</AnaBtn>
        </Wapper>
    )
}

const EmptyWapper = styled.div`
  width: 45%;
  height: 85%;
  background-color: #393E46;
  box-shadow: rgba(222, 222, 222, 0.2) 0px 7px 29px 0px;
  border: 1px solid white;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 95%;
    height: 50%;
  }
`;

const ImgWapper = styled.div`
    position: relative;
    width: 45%;
    height: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 8px 24px;
    
    img{
       border-radius: 10px;
    }
    @media (max-width: 768px) {
    width: 95%;
    height: 50%;
  }
`;

const Wapper = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    background-color:#222831;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const AnaBtn = styled.button`
  width: 15%;
  height: 70px;
  font-size: 32px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(205, 205, 205, 0.2) 0px 8px 24px;
  transition: all ease-in-out 0.3s;
  background-color: #00ADB5;
  color: white;

  &:hover{
    box-shadow: rgba(225, 225, 225, 0.25) 0px 50px 100px -20px, rgba(225, 225, 225, 0.3) 0px 30px 60px -30px, rgba(215, 215, 215, 0.35) 0px -2px 6px 0px inset;
    border: 1px solid white;
  }
  @media (max-width: 768px) {
    width: 35%;
    height: 50px;
    font-size: 20px;
  }
`;

const ImgProviewWapper  = styled.div`
  height: 70%;
  width: 60%;
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
    transition: all ease-in-out 0.3s;
    color:black;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 8px 24px;

    &:hover{
      transform: rotate(90deg);
      border-radius: 50%;
    }
    form{
      width: 30px;
      height: 30px;
      label {
        cursor: pointer;
      }
    }
    @media (max-width: 768px) {
    width: 40px;
    height: 35px;
    form{
      width: 20px;
      height: 20px;
    }
  }
`;



export default Home;

