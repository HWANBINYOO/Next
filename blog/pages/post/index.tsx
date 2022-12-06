import CustomAxios from "../../utils/lib/CustomAxios";
import {BlogType } from "../../types/BlogType"
import { GetServerSideProps } from "next";
import { Board, Header } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";
import cookies from "next-cookies";

export default function BoardPage({blogs} : {blogs : BlogType[]}) {
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  // const Authorization = cookies(ctx)['Authorization'] || "";
  const { Authorization } = await UseGetToken(ctx)
  try {
    const {data} = await CustomAxios.get(`/post`,{headers: {Authorization}});
    const blogs = data.list
    return { props: {blogs} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

// export const getStaticProps:GetStaticProps = async (ctx) => {
//   console.log(ctx);
//   // const [Authorization , setAuthorization] = useRecoilState(AuthorizationAtom)
//   // console.log(Authorization);
//   try {
//     //   const { data } = await CustomAxois.get(`/post`, {headers: {Authorization}});
//     // if (data) {
//     //   const blogIndata = data;
//     //   return { props: { blogIndata } };
//     // }
//     return { props: {} };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }