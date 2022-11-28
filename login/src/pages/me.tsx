import { GetServerSideProps } from "next";
import CustomAxois from "../../Util/CustomAxois";
import Profile from '../components/Profile'
import cookies from "next-cookies";

export default function ProfilePage({data} : {data:any}) {
  console.log(data);
  
  return (
    <>
      <Profile />
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  console.log(Authorization);
  
  try {
    const response = await CustomAxois.get(`/me`, {headers: {Authorization}});
    if (response) {
      console.log(response);
      return { props: { response } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}