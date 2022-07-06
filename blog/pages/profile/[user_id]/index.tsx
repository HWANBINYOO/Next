import Header from "../../../components/header";
import { useRouter } from "next/router";
import Profile from "../../../components/profile";

export default function ProfilePage() {
  const router = useRouter();
  const user_id = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Profile user_id={user_id} />
    </>
  );
}
