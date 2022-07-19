import Board from "../../components/board";
import Header from "../../components/header";
import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"



export default function BoardPage({blogs} :{blogs : BlogType} ) {
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await CustomAxois.get(`/board`);
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