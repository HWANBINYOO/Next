import Header from "../../../components/header";
import { useRouter } from "next/router";
import Profile from "../../../components/profile";

export default function ProfilePage() {
  const router = useRouter();
  const user_id = router.query as unknown as string;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Profile user_id={user_id} />
    </>
  );
}
