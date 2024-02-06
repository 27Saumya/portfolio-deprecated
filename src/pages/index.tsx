import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (

    <div className="container mt-24 mx-auto px-12 py-4">
      <Head>
        <title>Saumya</title>
        <meta property="og:title" content="Saumya" />
        <meta property="og:description" content="Yet another boring developer!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saumya.vercel.app" />
        <meta property="og:image" content="https://saumya.vercel.app/images/saumya.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default Home;