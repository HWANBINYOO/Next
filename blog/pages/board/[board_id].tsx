import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import BoardIn from "../../components/boardIn";
import Header from "../../components/header";
import { BlogType } from "../../types";
import Cookie from "../../utils/lib/cookie";
import CustomAxois from "../../utils/lib/CustomAxois";

export default function BoardInPage({blogInData} : {blogInData:BlogType}) {
  const router = useRouter();
  const { board_id } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // useEffect(() => {
  //   async function getblogIn() {
  //     console.log(Storage.get("Blog_accessToken") ?? "");
  //     console.log(window.localStorage.getItem("Blog_accessToken"));      
  //     try {
  //       const response = await CustomAxois.get(`/board/${board_id}`,{
  //         headers: {
  //           Authorization: Storage.get("Blog_accessToken") ?? "",
  //         },
  //       });
  //       console.log(response.data);
  //       setBlogIn(response.data);
  //     } catch (e: any) {
  //       console.error(e);
  //     }
  //   }
  //   getblogIn();
  // }, []);
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <BoardIn boardIndata={blogInData} board_id={board_id} />
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { board_id } = ctx.query;
  const { accessToken } = await Cookie(ctx);

  try {
    const { data } = await CustomAxois.get(`/board/${board_id}`, {
      headers: {
        Authorization: accessToken ?? "",
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
