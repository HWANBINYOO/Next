import Head from "next/head";
import About from "../components/about";
import Header from "../components/header";

function HomePage() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}

export default HomePage;
