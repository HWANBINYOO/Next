import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import CustomAxois from "../../utils/lib/CustomAxios";
import { useEffect, useState } from "react";
import { PostIdType } from "../../types";
import whiteImg from "../../public/Img/white.png"
import useSWR from 'swr';


const BoardIn = () => {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);  
  const { data:boardIndata } = useSWR<PostIdType>(`/post/${router.query.postid}`);
  const [Boardrl, setBoardurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
      if (boardIndata?.isMine) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
  }, []);

  const DelectBoard = async () => {
    await CustomAxois.delete(`/delete/${boardIndata?.id}`);
  };

  return (
    <S.BoardInWapper>
      <S.BoardButtonBox>
        <S.Button
          onClick={() => redirect(`/boardadd`)}
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
