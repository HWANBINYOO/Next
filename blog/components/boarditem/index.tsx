/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import { useState, useEffect } from "react";
import CustomAxois from "../../../devlog/utils/lib/CustomAxois";
import { BlogType } from "../../types";

const BoardItem: React.FC<BlogType> = ({
  user_name,
  date,
  title,
  content,
  board_id,
  user_id,
}) => {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const [boardImg, setboardImg] = useState("");
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    async function getboard() {
      try {
        const respone = await CustomAxois.get(`board_image/${board_id}`, {
          headers: {
            Authorization:
              window.localStorage.getItem("Blog_accessToken") ?? "",
          },
        });
        setboardImg(respone.data);
        const respone2 = await CustomAxois.get(`user_image/${user_id}`, {
          headers: {
            Authorization:
              window.localStorage.getItem("Blog_accessToken") ?? "",
          },
        });
        setProfileImg(respone2.data);
      } catch (e: any) {
        console.error(e.message);
      }
    }
    getboard();
  }, [board_id, user_id]);

  return (
    <S.BoardItem onClick={() => redirect(`/board/${board_id}`)}>
      <Image
        src={boardImg}
        alt="게시글 이미지"
        width={100}
        height={310}
        objectFit="cover"
      />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.desc>{content}</S.desc>
        <S.ItemBottom>
          <S.BottomLeft>
            <S.MemberImg onClick={() => redirect(`/profile/${user_id}`)}>
              <Image
                width={20}
                height={20}
                src={profileImg ?? profilenoneImg}
                alt="프로필 이미지"
              />
            </S.MemberImg>
            <S.MemberId>{user_name}</S.MemberId>
          </S.BottomLeft>
          <S.date>{date}</S.date>
        </S.ItemBottom>
      </S.TextBox>
    </S.BoardItem>
  );
};

export default BoardItem;
