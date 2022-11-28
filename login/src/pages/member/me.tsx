import { GetServerSideProps } from "next";
import CustomAxois from "../../utils/lib/CustomAxois";
import Profile from '../../components/Profile'
import cookies from "next-cookies";

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
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  console.log(Authorization);
  
  try {
    const {data} = await CustomAxois.get(`/member/me`, {headers: {Authorization}});
    console.log(data);
      const userId = data.data.id;
      const msg = data.msg;
    return { props: { userId , msg } };
  } catch (error:any) {
    console.log(error);
    return { props: {} };
  }
}