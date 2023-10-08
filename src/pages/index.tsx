import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (

    <div className="container mt-24 mx-auto px-12 py-4">
      <Head>
        <title>Saumya</title>
      </Head>
      <HomePage />
    </div>
  )
}

export default Home;