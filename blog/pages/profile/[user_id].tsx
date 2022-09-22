import Header from "@components/header";
import Profile from "@components/profile";
import { GetServerSideProps } from "next";
import Cookie from "../../utils/lib/cookie";
import CustomAxois from "../../utils/lib/CustomAxois";
import { ProfileType } from "../../types";

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
  const { accessToken } = await Cookie(ctx);
  
  try {
    const { data } = await CustomAxois.get(`/user_profile/${user_id}`, {
      headers: {
        Authorization: accessToken ?? "",
      },
    });
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