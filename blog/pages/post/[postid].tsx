import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { BoardIn, Header } from "../../components";
import { BlogType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxois";
import cookies from "next-cookies";

export default function BoardInPage({blogInData} : {blogInData:BlogType}) {
  
  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <BoardIn boardIndata={blogInData}/>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { postid } = ctx.query;
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";

  try {
    const { data } = await CustomAxois.get(`/post/${postid}`, {headers: {Authorization}});
    if (data) {
      const blogIndata = data;
      return { props: { blogIndata } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

// export const getStaticPaths:GetStaticPaths = async () => {
//   // const allCookies = cookies(ctx);
//   // const accessTokenByCookie = allCookies['Authorization'] || "";

//   // const { data } = await CustomAxois.get(`/post`, {
//   //   headers: {
//   //     Authorization: accessTokenByCookie,
//   //   },
//   // });
  
//   // const paths: BlogType[] = data.list.map((post : BlogType) => ({
//   //   params: { id: post.board_id },
//   // }))
  
//   return { paths : [], fallback: true }

// }

// export const getStaticProps:GetStaticProps = async (ctx) => {
//   const { params: { id }} = ctx as any;
//   const  board_id  = id;
//   // const allCookies = cookies(ctx);
//   // const accessTokenByCookie = allCookies['Authorization'] || "";

//   try {
//     const { data } = await CustomAxois.get(`/post/${board_id}`, {
//       headers: {
//           Authorization: accessTokenByCookie,
//       },
//     });
//     if (data) {
//       const blogIndata = data;
//       return { props: { blogIndata } };
//     }
//     return { props: {} };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }
