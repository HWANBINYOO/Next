import * as S from "./styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Animation from "./animation";
import CustomAxois from "../../lib/CustomAxois";

export default function Board({ posts }) {
  const router = useRouter();
  const redirect = (url) => router.push(url);
  const [Blogs, setBlogs] = useState();

  // useEffect(() => {
  //   async function getblog() {
  //     try {
  //       const { data } = await CustomAxois.get(`/board`,);
  //       console.log(data.id);
  //     } catch (error) {
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
        <h1>{posts}</h1>

        {/* {Blogs ? (
          // Blogs.sort(sortObject).map((item, index) => (
          //   <BlogItem
          //     key={index}
          //     board_id={item.board_id}
          //     user_id={item.user_id}
          //     user_name={item.user_name}
          //     title={item.title}
          //     content={item.content}
          //     date={item.date}
          //   />
          // ))

          <h1>h1~</h1>
        ) : (
          <S.loadingWapper>
            <Animation />
          </S.loadingWapper>
        )} */}
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
