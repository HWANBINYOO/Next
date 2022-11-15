import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Image from "next/image";


const StartContents:NextPage = () => {
    const router = useRouter();
    const [ModalState , setModalState] = useState(false);
    const [ startBtnClick , setStartBtnClick ] = useState(false);

    const [file, setFile] = useState(""); //파일
    const [imgBase64, setImgBase64] = useState(""); // 파일 base64

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
        formData.append("file", file);
        try {
            const response = await axios.post("https://openapi.naver.com/v1/vision/celebrity", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  'X-Naver-Client-Id':"EvY6apNDh5yLogXj5xPK",
                  "X-Naver-Client-Secret":"HYJkW3bKb9",
                //   "Access-Control-Allow-Origin": "*",
                },
              });
            console.log(response);
          } catch (e: any) {
            console.error(e);
          }
      };

      fetch

//   useEffect(() => {
//     async function getblog() {
//       try {
//         const { data } = await axios.post("https://openapi.naver.com/v1/vision/celebrity", formData, {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               'X-Naver-Client-Id':"EvY6apNDh5yLogXj5xPK",
//               "X-Naver-Client-Secret":"HYJkW3bKb9",
//             },
//           });
//         console.log(data);
//       } catch (e: any) {
//         console.error(e.message);
//       }
//     }
//     getblog();
//   }, []);

    

    const onClick = (name:string) => {
        router.push(`${name}`);
    }

    return (
        <Wapper>
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
          <label htmlFor="change_img">변경</label>
          {/* <button type="submit">제출하기</button> */}
        </form>
            {
            imgBase64 ? (
                <Image width={300} height={300} src={imgBase64} alt={''} />
            ) : (
                <p>없음</p>
            )
            }
            <button onClick={onSubmit}>올리기</button>


            {/* <IBtn onClick={() => setModalState(ModalState ? false : true )}>i
                <Modal style={{display: ModalState ? "block" : "none"}}>
                    마라탕 , 떡볶이 , 라면 토핑과 재료를 <br/>
                    랜덤으로 추천해주는 사이트입니다
                </Modal>
            </IBtn>
            <Title>
                { startBtnClick ? "메뉴를 선택하세요" : "뭐 넣지?" }
            </Title>

            
            <Btn onClick={() => startBtnClick ? onClick("마라탕") : setStartBtnClick(true)}>
                { startBtnClick ? "" : "시작하기" }
            </Btn> */}
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ff6464;

     
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    padding-bottom: 100px;
    gap: 130px;
`;

const Btn = styled.button`
    width: 250px;
    height: 70px;

    cursor: pointer;
    color: white;
    margin-right: 20px;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.15s ease-in-out;
    background-color: #ff6464;

    :hover{
        color: black;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`;

const Title = styled.span`
    color: white;
    font-size: 110px;
`;

const IBtn = styled.div`
    position: relative;
    bottom: 7%;
    left: 43%;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;
    color: gray;
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Modal = styled.div`
    width: 450px;
    height: 120px;
    background-color: white;
    padding: 50% 20px;
    border-radius: 10px;
    position: absolute;
    right: 0px;
    top: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;


export default StartContents;

