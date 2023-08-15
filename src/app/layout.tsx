import "./globals.scss";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Foot from "./components/Foot";

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
      <body className={inter.className + " pt-md-3"}>
        <Navbar />
        <div className="d-flex align-items-center text-center" style={{minHeight: "calc(100vh - 105px)"}}>
          <div id="content" className="container text-center bg-body-secondary rounded" style={{minHeight: "0"}}>
            {children}
          </div>
        </div>
        <Footer />
        <Foot />
      </body>
    </html>
  )
}
