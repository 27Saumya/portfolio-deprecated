import type { NextPage } from "next";
import Head from "next/head";
import AboutPage from "@/components/AboutPage";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const About: NextPage = () => {
  return (

    <div className="container mt-24 mx-auto px-12 py-4">
      <Head>
        <title>Saumya - About</title>
      </Head>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default About;