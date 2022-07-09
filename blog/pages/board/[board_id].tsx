import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardIn from "../../components/boardIn";
import Header from "../../components/header";
import { BlogType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxois";

export default function BoardInPage() {
  const router = useRouter();
  const { board_id } = router.query;
  const [blogIn, setBlogIn] = useState<BlogType>();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    async function getblogIn() {
      try {
        const response = await CustomAxois.get(`/board/${board_id}`, {
          headers: {
            Authorization:
              window.localStorage.getItem("Blog_accessToken") ?? "",
          },
        });
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
