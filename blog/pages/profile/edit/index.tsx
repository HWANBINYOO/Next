import Header from "../../../components/header";
import { useRouter } from "next/router";
import ProfileEdit from "../../../components/profileEdit";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <ProfileEdit />
    </>
  );
}
