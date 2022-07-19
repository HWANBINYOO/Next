import Header from "../../components/header";
import { useRouter } from "next/router";
import Profile from "../../components/profile";

export default function ProfilePage() {
  return (
    <>
    <Header HeaderColor={"skyblue"} />
      <Profile />
    </>
  );
}
