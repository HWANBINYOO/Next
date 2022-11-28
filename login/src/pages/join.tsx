import { useRouter } from "next/router";
import Signup from "../components/signup";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Signup />
    </>
  );
}