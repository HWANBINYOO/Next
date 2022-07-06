import { useEffect, useState } from "react";
import { customAxios } from "../../lib/CustomAxois";
import BlogItem from "../BlogItem/BlogItem";
import { useRouter } from "next/router";
import * as S from "./styled";
import Image from "next/image";

export default function Profile({ user_id }) {
  const [profile, SetProfile] = useState();
  const [Blogs, setBlogs] = useState();
  const [my, setmy] = useState(false);
  const router = useRouter();
  const redirect = (url) => router.push(url);

  useEffect(() => {
    async function Getprofile() {
      const res = await customAxios.get(`/user_profile/${user_id}`);
      console.log(res);
      const res2 = await customAxios.get(`/boards/${user_id}`);
      console.log(res2);
      const { data } = await customAxios.get("user_name");
      if (data.user_id == user_id) setmy(true);
      SetProfile(res?.data);
      setBlogs(res2?.data.blogs);
    }

    Getprofile();
  }, []);

  function sortObject(a, b) {
    return b.board_id - a.board_id;
  }

  return (
    <>
      <S.Profile>
        <S.ProfileImpormation>
          <S.ProfileImg>
            {profile?.url ? (
              <Image src={profile?.url} width={230} height={230} />
            ) : (
              <Image
                width={230}
                height={230}
                src={
                  "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
                }
              />
            )}
          </S.ProfileImg>
          <S.User>
            <S.EditGO>
              <S.UserName>{profile?.name}</S.UserName>
              <S.UserName></S.UserName>
              {my ? (
                <S.GOEdit onClick={() => redirect("/profile/Edit")}>
                  프로필 편집
                </S.GOEdit>
              ) : null}
            </S.EditGO>
            <S.UserBlogs>{`게시글 수:${profile?.board_number}`}</S.UserBlogs>
            <S.UserEmail>{profile?.email}</S.UserEmail>
          </S.User>
        </S.ProfileImpormation>
        <S.Hr />
        <S.uploadBlogs>
          {Blogs.sort(sortObject).map((item, index) => (
            <BlogItem
              key={index}
              board_id={item.board_id}
              user_id={item.user_id}
              user_name={item.user_name}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          ))}
        </S.uploadBlogs>
        <Footer />
      </S.Profile>
    </>
  );
}
