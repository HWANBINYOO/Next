import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import { useState, useEffect } from "react";
import CustomAxois from "../../utils/lib/CustomAxois";

const BoardItem = ({ user_name, date, title, content, board_id, user_id }) => {
  const router = useRouter();
  const redirect = (url) => router.push(url);
  const [boardImg, setboardImg] = useState("");
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    async function getboard() {
      try {
        const respone = await CustomAxois.get(`board_image/${board_id}`, {
          headers: {
            Authorization: window.localStorage.getItem("Blog_accessToken"),
          },
        });
        setboardImg(respone.data);
        const respone2 = await CustomAxois.get(`user_image/${user_id}`, {
          headers: {
            Authorization: window.localStorage.getItem("Blog_accessToken"),
          },
        });
        setProfileImg(respone2.data);
      } catch (e) {
        console.error(e.message);
      }
    }
    getboard();
  }, []);

  return (
    <S.BoardItem onClick={() => redirect(`/board/${board_id}`)}>
      <Image src={boardImg} />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.desc>{content}</S.desc>
        <S.ItemBottom>
          <S.BottomLeft>
            <S.MemberImg onClick={() => redirect(`/profile/${user_id}`)}>
              {profileImg ? (
                <Image width={20} height={20} src={profileImg} />
              ) : (
                // <Image width={20} height={20} src={profilenoneImg} />
                <h1>d</h1>
              )}
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
