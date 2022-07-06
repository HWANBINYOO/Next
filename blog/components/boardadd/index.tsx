/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import * as S from "./styled";
import CustomAxois from "../../utils/lib/CustomAxois";
import Image from "next/image";
import { useRouter } from "next/router";
import whiteImg from "../../public/Img/white.png";

const BoardAdd = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
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
    formData.append("title", title);
    formData.append("content", desc);
    formData.append("date", `${year}-${month}-${day}`);
    try {
      await CustomAxois.post("/board/write", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("추가됐습니다!");
      redirect("/board");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <S.BoardAddWapper>
      <S.Box>
        <S.InputBox>
          <textarea
            name="textareaTitle"
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="제목을 입력해주세요"
          />
        </S.InputBox>
        <S.DescInputBox>
          <textarea
            name="textarea"
            onChange={(e) => setDesc(e.currentTarget.value)}
            placeholder="내용을 입력하세요"
          />
        </S.DescInputBox>
      </S.Box>
      <S.BoardAddImgWapper>
        <S.BoardImg>
          {file ? (
            <Image src={imgBase64} />
          ) : (
            <Image width={90} height={100} src={whiteImg} />
          )}
        </S.BoardImg>
        <form
          name="files"
          method="post"
          encType="multipart/form-data"
          // onSubmit={onClick}
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
      </S.BoardAddImgWapper>

      <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
      <S.Button onClick={onSubmit}>올리기</S.Button>
    </S.BoardAddWapper>
  );
};

export default BoardAdd;
