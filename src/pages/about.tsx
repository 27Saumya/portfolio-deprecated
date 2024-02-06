import type { NextPage } from "next";
import Head from "next/head";
import AboutPage from "../components/AboutPage";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const About: NextPage = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <Head>
        <title>Saumya | About</title>
        <meta property="og:title" content="Saumya | About" />
        <meta property="og:description" content="About yet another boring developer!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saumya.vercel.app/about" />
        <meta property="og:image" content="https://saumya.vercel.app/images/saumya.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default About;