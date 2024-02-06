import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/NavBar';
import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const Contact: NextPage = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <Head>
        <title>Saumya | Contact</title>
        <meta property="og:title" content="Saumya | Contact" />
        <meta property="og:description" content="Contact yet another boring dev!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saumya.vercel.app/contact" />
        <meta property="og:image" content="https://saumya.vercel.app/images/saumya-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 3000}}/>
      <ContactPage />
      <Footer />
    </div>
  )
};

export default Contact;
