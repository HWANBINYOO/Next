import Head from "next/head";
import Hero from "@components/home/hero";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 jus body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
