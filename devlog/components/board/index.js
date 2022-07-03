import * as S from "./styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Animation from "./animation";
import CustomAxois from "../../lib/CustomAxois";

export default function Board() {
  const router = useRouter();
  const redirect = (url) => router.push(url);
  const [Blogs, setBlogs] = useState();

  useEffect(() => {
    async function getblog() {
      console.log(localStorage.getItem("Blog_accessToken"));
      try {
        const { data } = await CustomAxois.get(`/board`, {
          headers: {
            Authorization: localStorage.getItem("Blog_accessToken"),
            RefreshToken: localStorage.getItem("Blog_refreshToken"),
          },
        });
        setBlogs(data.blogs);
        console.log(data.id);
      } catch (e) {
        console.error(e.message);
      }
    }
    getblog();
  }, []);

  return (
    <S.BlogWapper>
      <S.BlogButtonBox>
        <S.Button color="#aeddff" onClick={() => redirect("/boardadd")}>
          +
        </S.Button>
      </S.BlogButtonBox>
      <S.BLogWarpper>
        {Blogs ? (
          Blogs.map((item, index) => (
            <BlogItem
              key={index}
              board_id={item.board_id}
              user_id={item.user_id}
              user_name={item.user_name}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          ))
        ) : (
          <S.loadingWapper>
            <Animation />
          </S.loadingWapper>
        )}
      </S.BLogWarpper>
    </S.BlogWapper>
  );
}

// export async function getStaticProps() {
//   try {
//     const { data } = await CustomAxois.get(`/board`);
//     console.log(data);
//   } catch (e) {
//     console.error(e.message);
//   }
//   return {
//     props: { data },
//   };
// }
