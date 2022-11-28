import { GetServerSidePropsContext, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "../utils/recoil/state";
import Login from "../components/login";
import CustomAxois from "../../Util/CustomAxois";


// export async function a(ctx: GetServerSidePropsContext){
//   const AccessToKenTime = 60000 * 3;  //3분
//   const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일
//   const [email] = useRecoilState(emailState); 
//   const [password] = useRecoilState<string>(passwordState);
//   try {
//     const { data } = await CustomAxois.post(
//       `/v1/member/login`,
//       {
//         email: email,
//         password: password,
//       }
//       );
//     const Blog_accessToken = data.accessToken;
//     const Blog_refreshToken = data.refreshToken;
//     ctx.res.setHeader("Blog_accessToken", `${Blog_accessToken}; maxAge=${AccessToKenTime};`);
//     ctx.res.setHeader("Blog_refreshToken", `${Blog_refreshToken}; maxAge=${RefreshTokenTime};`);
    
//   } catch (e: any) {
//     console.error(e.message);
//   }
// }


export default function Home(res: any ) {
  const router = useRouter();

//  useEffect(()=>{
//     try {
      
//       router.push("/board");
//     } catch (e: any) {
//       console.error(e.message);
//     }
//   }
//  },[email,password]);

  return (
    <>
      <Login res={res} />
    </>
  );
}



