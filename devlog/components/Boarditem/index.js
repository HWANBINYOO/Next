import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./Styled";

export default function BoardItem({
  user_name,
  date,
  title,
  content,
  board_id,
  user_id,
}) {
  const router = useRouter();
  const redirect = (url) => router.push(url);

  useEffect(() => {
    async function getblog() {
      try {
        const respone = await customAxios.get(`/board_image/${board_id}`);
        setBlogImg(respone.data);
        const respone2 = await customAxios.get(`user_image/${user_id}`);
        setProfileImg(respone2.data);
      } catch (e) {
        console.error(e.message);
      }
    }
    getblog();
  }, []);

  return (
    <S.BlogItem onClick={(e) => redirect(`/board/${board_id}`)}>
      <S.Image src={blogImg} />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.desc>{content}</S.desc>
        <S.ItemBottom>
          <S.BottomLeft>
            <S.MemberImg onClick={(e) => redirect(`/profile/${user_id}`)}>
              {profileImg ? (
                <Image width={20} height={20} src={profileImg} />
              ) : (
                <Image width={20} height={20} src={profilenoneImg} />
              )}
            </S.MemberImg>
            <S.MemberId>{user_name}</S.MemberId>
          </S.BottomLeft>
          <S.date>{date}</S.date>
        </S.ItemBottom>
      </S.TextBox>
    </S.BlogItem>
  );
}
