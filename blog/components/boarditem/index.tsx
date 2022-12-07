import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import { useState } from "react";
import { PostIdType } from "../../types";
import { NextPage } from "next";

const BoardItem: NextPage<PostIdType> = ({
  isMine,
  title,
  content,
  postId,
  tags,
  imageUrl,
  comments,
}) => {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const [boardImg, setboardImg] = useState("");
  const [profileImg, setProfileImg] = useState("");

  // useEffect(() => {
  //   async function getboard() {
  //     try {
  //       const respone = await CustomAxois.get(`board_image/${postId}`);
  //       console.log(respone.data);
  //       setboardImg(respone.data);
  //       const respone2 = await CustomAxois.get(`user_image/${user_id}`);
  //       setProfileImg(respone2.data);
  //     } catch (e: any) {
  //       console.error(e.message);
  //     }
  //   }
  //   getboard();
  // }, [board_id, user_id]);

  return (
    <S.BoardItem onClick={() => redirect(`/post/${postId}`)}>
      {
        boardImg ? 
        <Image
        src={boardImg }
        alt="게시글 이미지"
        width={100}
        height={310}
        objectFit="cover"
      /> : <p>Loading..</p>
      }
     
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.desc>{content}</S.desc>
        <S.ItemBottom>
          <S.BottomLeft>
            <S.MemberImg>
            {/* <S.MemberImg onClick={() => redirect(`/profile/${user_id}`)}> */}
              {
                profileImg ?
                <Image
                width={20}
                height={20}
                src={profileImg}
                alt="프로필 이미지"
                objectFit="cover"
                /> :  <Image
                width={20}
                height={20}
                src={profilenoneImg}
                alt="프로필 이미지"
                />
              }
            </S.MemberImg>
            <S.MemberId>{"유저 이름"}</S.MemberId>
          </S.BottomLeft>
          <S.date>{"날짜"}</S.date>
        </S.ItemBottom>
      </S.TextBox>
    </S.BoardItem>
  );
};

export default BoardItem;
