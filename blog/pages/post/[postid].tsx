import { GetServerSideProps,NextPage } from "next";
import { BoardIn, Header } from "../../components";
import { PostIdType } from "../../types";
import CustomAxois from "../../utils/lib/CustomAxios";
import { UseGetToken } from "../../Hooks/useToken";
import { SWRConfig } from 'swr';

const BoardInPage:NextPage<{fallback : Record<string,PostIdType[]>}> = ({fallback}) => {
  return (
    <SWRConfig value={fallback}>
      <Header HeaderColor={"skyblue"} />
      <BoardIn />
    </SWRConfig>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { postid } = ctx.query;  
  const { Authorization } = await UseGetToken(ctx)  

  try {
    const { data:blogIndata } = await CustomAxois.get(`/post/${postid}`, {headers: {Authorization}});
    return { 
      props: { 
        fallback: {
          '/post/1':blogIndata
        }
      } 
    };
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
