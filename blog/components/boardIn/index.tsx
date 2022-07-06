/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import CustomAxois from "../../utils/lib/CustomAxois";
import { useEffect, useState } from "react";

// export async function getStaticProps() {
//   const router = useRouter();
//   const board_id = router.query.board_id;
//   try {
//     const response = await CustomAxois.get(`/board/${board_id}`);
//     const boardIndata = response.data;
//   } catch (e: any) {
//     console.error(e.message);
//   }
//   return {
//     props: { boardIndata },
//   };
// }

const BoardIn = ({ boardIndata }: { boardIndata: any }) => {
  const [Boardrl, setBoardurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const router = useRouter();
  const board_id = router.query.board_id;
  const redirect = (url: string) => router.push(url);

  useEffect(() => {
    async function GetBoardImg() {
      const res = await CustomAxois.get(`/board_image/${board_id}`);
      setBoardurl(res.data);
      const res2 = await CustomAxois.get(`user_image/${boardIndata.user_id}`);
      setProfileImg(res2.data);
      const respone2 = await CustomAxois.get(`/user_name`);

      if (respone2.data.user_id === boardIndata.user_id) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
    }
    GetBoardImg();
  }, []);

  const DelectBoard = async () => {
    await CustomAxois.delete(`/delete/${board_id}`);
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
      <S.Title>{boardIndata.title}</S.Title>
      <S.NameDate>
        <S.Name>
          {boardIndata.user_name} · {boardIndata.date}
        </S.Name>
      </S.NameDate>
      <S.TextBox>
        <Image src={Boardrl ?? ""} width={`40%`} alt="boardIn 이미지" />
        <S.desc>{boardIndata.content}</S.desc>
      </S.TextBox>
      <S.ProfileWapper
        onClick={(e) => redirect(`/profile/${boardIndata.user_id}`)}
      >
        <Image
          src={profileImg ?? profilenoneImg}
          width={150}
          height={150}
          objectFit="cover"
          alt="profile 이미지"
        />
        <S.ProfileName>{boardIndata.user_name}</S.ProfileName>
      </S.ProfileWapper>
    </S.BoardInWapper>
  );
};

export default BoardIn;
