import CustomAxois from "../../utils/lib/CustomAxois";
import {BlogType } from "../../types/BlogType"
import cookies from "next-cookies";
import { GetServerSideProps, GetStaticProps } from "next";
import { Board, Header } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";

export default function BoardPage({blogs} : {blogs : BlogType[]}) {

  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  let Authorization = cookies(ctx)['Authorization'];

  if(!Authorization){
    const { accessToken } = await UseGetToken(ctx)
    Authorization = accessToken
  }
  console.log(Authorization);

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