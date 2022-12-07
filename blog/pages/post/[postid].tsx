import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BoardIn, Header } from "../../components";
import { PostIdType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxios";
import { UseGetToken } from "../../Hooks/useToken";
import { SWRConfig } from 'swr';
import { useRouter } from "next/router";

const BoardInPage:NextPage<{blogInData :PostIdType[]}> = ({blogInData}) => {
  const router = useRouter();
  const {postid} = router.query
  const Url = `/post${postid}`
  return (
    <SWRConfig value={{fallback: {'/post' : blogInData}}}>
      <Header HeaderColor={"skyblue"} />
      <BoardIn />
    </SWRConfig>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { postid } = ctx.query;
  console.log(postid);
  
  const { Authorization } = await UseGetToken(ctx)

  try {
    const { data } = await CustomAxois.get(`/post/${postid}`, {headers: {Authorization}});
    const blogIndata = data;
    return { props: { blogIndata } };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

export default BoardInPage

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
