import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"
import cookies from "next-cookies";
import { GetServerSideProps } from "next";
import { Board, Header } from "../../components";
import { useGetToken } from "../../Hooks/useToken";

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
  let Authorization = allCookies['Authorization'] || "";
  let RefreshToken = allCookies['RefreshToken'] || "";

  console.log(Authorization);
  if(!Authorization){
    const { accessToken , refreshToken } = await useGetToken(ctx);
    Authorization = accessToken;
    RefreshToken = refreshToken;
  }

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