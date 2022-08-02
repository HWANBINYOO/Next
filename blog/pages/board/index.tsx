import Board from "../../components/board";
import Header from "../../components/header";
import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"
import Cookie from "../../utils/lib/cookie";
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
  const { accessToken } = await Cookie(ctx);

  try {
    const { data } = await CustomAxois.get(`/board`, {
      headers: {
        Authorization: accessToken ?? "",
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