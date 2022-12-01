import { GetServerSideProps } from "next";
import CustomAxois from "../../utils/lib/CustomAxois";
import Profile from '../../components/Profile'
import cookies from "next-cookies";
import { UseGetToken } from "../../../Hooks/useToken";

export interface profileProp {
  userId? : number,
  msg : string,
}

export default function ProfilePage({userId , msg} : profileProp) {
  
  return (
    <>
      <Profile userId={userId} msg={msg} />
    </>
  )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  let Authorization = cookies(ctx)['Authorization'];
  
  if(!Authorization){
     const { accessToken } = await UseGetToken(ctx)
     Authorization = accessToken
  }
  console.log(Authorization);

  try {
    const {data} = await CustomAxois.get(`/member/me`, {headers: {Authorization}});
      const userId = data.data.id;
      const msg = data.msg;
    return { props: { userId , msg } };
  } catch (error:any) {
    console.log(error);
    return { props: {} };
  }
}