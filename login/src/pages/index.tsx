import { useRouter } from "next/router";
import Home from "../components/Home";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Home />
    </>
  );
}



