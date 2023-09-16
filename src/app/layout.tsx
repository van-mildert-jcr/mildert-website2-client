import React from "react";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Foot from "./components/Foot";

import "./globals.scss";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Van Mildert College JCR',
  description: 'The undergraduate student body of Van Mildert College, University of Durham',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <Head />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Foot />
      </body>
    </html>
  )
}
