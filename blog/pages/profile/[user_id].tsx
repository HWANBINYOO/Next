import { GetServerSideProps } from "next";
import CustomAxois from "../../utils/lib/CustomAxois";
import { ProfileType } from "../../types";
import { Header, Profile } from "../../components";
import cookies from "next-cookies";


export default function ProfilePage({ProfileData} : {ProfileData : ProfileType}) {
  return (
    <>
    <Header HeaderColor={"skyblue"} />
      <Profile ProfileData={ProfileData} />
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user_id } = ctx.query;
  const allCookies = cookies(ctx);
  const Authorization = allCookies['Authorization'] || "";
  
  try {
    const { data } = await CustomAxois.get(`/user_profile/${user_id}`, {headers: {Authorization}});
    if (data) {
      const ProfileData = data;
      return { props: { ProfileData } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}