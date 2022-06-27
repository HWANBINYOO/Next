import * as S from "./styled";
import { useState } from "react";
import { useRouter } from "next/router";
import Animation from "./animation";

export default function Board() {
  const router = useRouter();
  const redirect = (url) => router.push(url);
  const [Blogs, setBlogs] = useState();

  return (
    <S.BlogWapper>
      <S.BlogButtonBox>
        <S.Button color="#aeddff" onClick={() => redirect("/boardadd")}>
          +
        </S.Button>
      </S.BlogButtonBox>
      <S.BLogWarpper>
        {Blogs ? (
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
        )}
      </S.BLogWarpper>
    </S.BlogWapper>
  );
}
