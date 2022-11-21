import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { BoardIn, Header } from "../../components";
import { BlogType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxois";
import cookie from 'react-cookies'


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
  const token = cookie.load('Blog_accessToken')

  try {
    const { data } = await CustomAxois.get(`/board/${board_id}`, {
      headers: {
        Authorization: token ?? "",
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
