import { GetServerSideProps } from "next";
import CustomAxois from "../utils/lib/CustomAxois";
import Profile from '../components/Profile'
import cookies from "next-cookies";

export interface profileProp {
  userId? : number,
  msg : string,
}

export default function ProfilePage({userId , msg} : profileProp) {
  console.log(msg);
    
  return (
    <>
      <Profile userId={userId} msg={msg} />
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  
  try {
    const {data} = await CustomAxois.get(`/me`, {headers: {Authorization}});
    if (data.data) {
      console.log(data.msg);
      
      const userId = data.data.id;
      const msg = data.msg;
      return { props: { userId , msg } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}