import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardIn from "../../components/boardIn";
import Header from "../../components/header";
import { BlogType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxois";
import Storage from "../../utils/Storage";

export default function BoardInPage() {
  const router = useRouter();
  const { board_id } = router.query;
  const [blogIn, setBlogIn] = useState<BlogType>();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    async function getblogIn() {
      console.log(Storage.get("Blog_accessToken") ?? "");
      console.log(window.localStorage.getItem("Blog_accessToken"));      
      try {
        const response = await CustomAxois.get(`/board/${board_id}`,{
          headers: {
            Authorization: Storage.get("Blog_accessToken") ?? "",
          },
        });
        console.log(response.data);
        setBlogIn(response.data);
      } catch (e: any) {
        console.error(e);
      }
    }
    getblogIn();
  }, []);

  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <BoardIn boardIndata={blogIn} board_id={board_id} />
    </>
  );
}

// export async function getServerSideProps({ query }: { query: any }) {
//   const { board_id } = query;
//   try {
//     const { data } = await CustomAxois.get(`/board/${board_id}`, {
//       headers: {
//         Authorization: Storage.get("Blog_accessToken") ?? "",
//       },
//     });
//     console.log(data);

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
