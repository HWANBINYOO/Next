import Board from "../../components/board/index";
import Header from "../../components/header";
import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"
import { useCookies } from "react-cookie";
import { GetServerSideProps } from "next";



export default function BoardPage({blogs} :{blogs : BlogType} ) {
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const [cookies, setCookie] = useCookies(["Blog_accessToken"]);

  try {
    const { data } = await CustomAxois.get(`/board`, {
      headers: {
        Authorization: cookies.Blog_accessToken ?? "",
      },
    });
    if (data) {
      const blogs = data.blogs;
      return { props: { blogs } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}