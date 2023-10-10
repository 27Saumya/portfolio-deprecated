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
        <title>Saumya - Contact</title>
      </Head>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 3000}}/>
      <ContactPage />
      <Footer />
    </div>
  )
};

export default Contact;