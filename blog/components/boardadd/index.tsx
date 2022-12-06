import { useState } from "react";
import * as S from "./styled";
import CustomAxios from "../../utils/lib/CustomAxios";
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
  const [file, setFile] = useState("");
  const [imgBase64, setImgBase64] = useState("");

  const handleChangeFile = (e: any) => {
    e.preventDefault();
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    let boardDto = {
      title: title,
      content: desc,
      date: `${year}-${month}-${day}`,
    };
    formData.append(
      "boardDto",
      new Blob([JSON.stringify(boardDto)], { type: "application/json" })
    );
    try {
      // await CustomAxois.post("/board/write", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      await CustomAxios.post("/post",{
        title,
        content : desc,
        tags : ["벡엔드" , "프론트엔드"]
      }
      );
      console.log("추가됐습니다!");
      redirect("/post");
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
          {/* {file ? (
            <Image src={imgBase64 ?? whiteImg} />
          ) : (
            <Image width={90} height={100} src={whiteImg} alt="board 이미지" />
          )} */}
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
        </form>
      </S.BoardAddImgWapper>

      <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
      <S.Button onClick={onSubmit}>올리기</S.Button>
    </S.BoardAddWapper>
  );
};

export default BoardAdd;
