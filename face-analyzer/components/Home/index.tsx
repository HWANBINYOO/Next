import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Image from "next/image";
import { useRecoilState } from 'recoil';
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';

const Home:NextPage = () => {
  const router = useRouter();
  const [file, setFile] = useState(""); //파일
  const [imgBase64, setImgBase64] = useRecoilState(imgBase64Atom); // 파일 base64
  const [, setCelebrityListAtom] = useRecoilState(celebrityListAtom); // 파일 base64
  const [, setFaceList] = useRecoilState(faceListAtom); // 파일 base64

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
              setCelebrityListAtom(response1.data.faces);
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
          <h1 style={{fontSize:"80px"}}>FAR</h1>
        {
            imgBase64 ? (
                <Image width={400} height={400} src={imgBase64} alt={'분석할 이미지'} />
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
          <label htmlFor="change_img">사진변경</label>
          {/* <button type="submit">제출하기</button> */}
        </form>
        <AnaBtn onClick={onSubmit}>분석하기</AnaBtn>
        </Wapper>
    )
}

const EmptyWapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
`;

const Wapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color:darkgray;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const AnaBtn = styled.button`
  width: 150px;
  height: 60px;
  font-size: 30px;
  border-radius: 10px;
  border: none;

  cursor: pointer;
  
`;



export default Home;

