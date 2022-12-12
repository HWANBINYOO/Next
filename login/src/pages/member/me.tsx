import { GetServerSideProps } from "next";
import CustomAxios from "../../utils/lib/CustomAxios";
import Profile from '../../components/Profile'
import { UseGetToken } from "../../Hooks/useToken";

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
  const { Authorization } = await UseGetToken(ctx)

  try {
    const {data} = await CustomAxios.get(`/member/me`, {headers: {Authorization}});
      const userId = data.data.id;
      const msg = data.msg;
    return { props: { userId , msg } };
  } catch (error:any) {
    console.log(error);
    return { props: {} };
  }
}