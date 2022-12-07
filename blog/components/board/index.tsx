import * as S from "./styled";
import { useRouter } from "next/router";
import BoardItem from "../boarditem/index";
import { PostIdType } from "../../types/PostType";
import useSWR from 'swr';

interface PostProps {
  list : PostIdType[]
}

export default function Board() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { data } = useSWR<PostProps>("/post");
  const blogs = data?.list;
  console.log(blogs);

  return (
    <S.BlogWapper>
      <S.BlogButtonBox>
        <S.Button color="#aeddff" onClick={() => redirect("/post/add")}>
          +
        </S.Button>
      </S.BlogButtonBox>
      <S.BLogWarpper>
        {blogs ? (
          blogs.map((item, index) => (
            <BoardItem
              key={index}
              postId={item.postId}
              isMine={item.isMine}
              title={item.title}
              content={item.content}
              tags={item.tags}
              imageUrl={item.imageUrl}
              comments={item.comments}
            />
          ))
        ) : (
          <S.loadingWapper>
            불러오는중
          </S.loadingWapper>
        )}
      </S.BLogWarpper>
    </S.BlogWapper>
  );
}