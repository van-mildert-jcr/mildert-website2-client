import React from "react";
import { Inter } from "next/font/google";

import Navbar from "@/app/components/Navbar";
import Head from "@/app/components/Head";
import Footer from "@/app/components/Footer";
import Foot from "@/app/components/Foot";

import "@/app/globals.scss";

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
