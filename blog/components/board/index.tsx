import * as S from "./styled";
import { useState } from "react";
import { useRouter } from "next/router";
import Animation from "./animation";
import BoardItem from "../boarditem/index";
import { BlogType } from "../../types";

export default function Board({blogs} : {blogs : BlogType[]}) {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  
  // const token = cookie.load('Authorization') // csr
  // useEffect(() => {
  //   async function getblog() {
  //     try {
  //       const { data } = await CustomAxois.get(`/post`);
  //       console.log(data);
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
        {blogs ? (
          blogs.map((item, index) => (
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
