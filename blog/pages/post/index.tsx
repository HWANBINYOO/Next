import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"
import cookies from "next-cookies";
import { GetServerSideProps } from "next";
import { Board, Header } from "../../components";

export default function BoardPage({blogs} :{blogs : BlogType[]} ) {

  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  
  if(!Authorization){}

  try {
    const { data } = await CustomAxois.get(`/post`, {headers: {Authorization}});
    if (data) {
      const blogs = data.list;
      return { props: { blogs } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}