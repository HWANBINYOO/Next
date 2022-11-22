import * as S from "./styled";
import { useRouter } from "next/router";
import Animation from "./animation";
import BoardItem from "../boarditem/index";
import { BlogType } from "../../types";

export default function Board({blogs} : {blogs : BlogType[]}) {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

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
              postId={item.postId}
              title={item.title}
              content={item.content}
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
