import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import CustomAxois from "../../utils/lib/CustomAxios";
import { useEffect, useState } from "react";
import { BlogType } from "../../types";
import whiteImg from "../../public/Img/white.png"
import { NextPage } from "next";

const BoardIn = ({boardIndata} : { boardIndata : BlogType} ) => {
  const [Boardrl, setBoardurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

  // useEffect(() => {
  //   async function GetBoardImg() {
  //     const res = await CustomAxois.get(`/board_image/${board_id}`);
  //     setBoardurl(res.data);
  //     const res2 = await CustomAxois.get(`/user_image/${boardIndata?.user_id}`);
  //     setProfileImg(res2.data);
  //     const respone2 = await CustomAxois.get(`/user_name`);

  //     if (respone2.data.user_id === boardIndata?.user_id) {
  //       setDelectDisplay(true);
  //     } else {
  //       setDelectDisplay(false);
  //     }
  //   }
  //   GetBoardImg();
  // }, []);

  const DelectBoard = async () => {
    await CustomAxois.delete(`/delete/${boardIndata.postId}`);
  };

  return (
    <S.BoardInWapper>
      <S.BoardButtonBox>
        <S.Button
          onClick={(e) => redirect(`/boardadd`)}
          style={{ backgroundColor: "#aeddff" }}
        >
          +
        </S.Button>

        <S.Button
          onClick={DelectBoard}
          style={{
            backgroundColor: "rgb(255, 157, 149)",
            display: DelectDisplay ? "block" : "none",
          }}
        >
          x
        </S.Button>
      </S.BoardButtonBox>
      <S.Title>{boardIndata?.title}</S.Title>
      <S.NameDate>
        <S.Name>
          {/* {boardIndata?.user_name} · {boardIndata?.date} */}
          "유저이름 · 날짜"
        </S.Name>
      </S.NameDate>
      <S.TextBox>
        {
          Boardrl ? 
          (
            <Image src={Boardrl} width={`40%`} alt="boardIn 이미지" /> 
          ): (
            <Image src={whiteImg} width={"40%"} alt="로딩 이미지" /> 
          )
        }
      <S.desc>{boardIndata?.content}</S.desc>
      </S.TextBox>
      <S.ProfileWapper>
        {
          profileImg ?
          <Image
          src={profileImg ?? profilenoneImg}
          width={150}
          height={150}
          objectFit="cover"
          alt="profile 이미지"
        /> :
        <Image
        src={profilenoneImg}
        width={150}
        height={150}
        objectFit="cover"
        alt="profile 이미지"
        />
      }
        <S.ProfileName>{"유저이름"}</S.ProfileName>
      </S.ProfileWapper>
    </S.BoardInWapper>
  );
};

export default BoardIn;
