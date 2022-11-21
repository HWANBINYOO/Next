import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"
import cookie from 'react-cookies'
import { GetServerSideProps } from "next";
import { Board, Header } from "../../components";



export default function BoardPage({blogs} :{blogs : BlogType} ) {
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = cookie.load('Blog_accessToken')
  let cookiee = ctx?.ctx?.req?.headers?.cookie?.split(";");
  
  console.log(cookiee);
  console.log(token);
  

  try {
    const { data } = await CustomAxois.get(`/post`, {
      headers: {
        Authorization: token ?? "",
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