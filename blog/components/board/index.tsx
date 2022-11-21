import * as S from "./styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Animation from "./animation";
import CustomAxois from "../../utils/lib/CustomAxois";
import BoardItem from "../boarditem/index";
import { BlogType } from "../../types";

// export async function getServerSideProps() {
//   console.log(window.localStorage.getItem("Blog_accessToken")); 
//   try {
//     const { data } = await CustomAxois.get(`/board`);
//     if (data) {
//       const blogs = data.blogs;
//       return { props: { blogs } };
//     }
//     return { props: {} };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }

export default function Board({blogs} : {blogs : BlogType[]}) {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const [Blogs, setBlogs] = useState<BlogType[]>();
  

  // useEffect(() => {
  //   async function getblog() {
  //     console.log(window.localStorage.getItem("Blog_accessToken"));
  //     try {
  //       const { data } = await CustomAxois.get(`/board`);
  //       console.log(data.blogs);
  //       setBlogs(data.blogs); 
  //     } catch (e: any) {
  //       console.error(e.message);
  //     }
  //   }
  //   getblog();
  // }, []);

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
            <BoardItem
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
