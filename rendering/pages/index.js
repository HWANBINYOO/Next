import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/posts">
        <a>posts</a>
      </Link>
    </>
  );
}

export default Home;
