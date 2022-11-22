import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { BoardIn, Header } from "../../components";
import { BlogType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxois";
import cookies from "next-cookies";


export default function BoardInPage({blogInData} : {blogInData:BlogType}) {
  const router = useRouter();
  const { board_id } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <BoardIn boardIndata={blogInData} board_id={board_id} />
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { board_id } = ctx.query;
  const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies['Authorization'] || "";

  try {
    const { data } = await CustomAxois.get(`/post/${board_id}`, {
      headers: {
          Authorization: accessTokenByCookie,
      },
    });
    if (data) {
      const blogIndata = data;
      return { props: { blogIndata } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}