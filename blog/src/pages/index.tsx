import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import Promotion from "../components/Promotion/Promotion";

const Home: NextPage = ({}) => {
  return (
    <>
      <Link href={"/login"}>
        <a> 로그인으로!!</a>
      </Link>
    </>
  );
};

export default Home;
