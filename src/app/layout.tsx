import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

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
      {/* Temp Head */}
      <head>
        {/* IMPORT FROM head.html */}
        {/* <!-- Required meta tags --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Bootstrap CSS --> */}
        {/* <!-- CSS only --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
        <noscript>Please enable JavaScript.</noscript>
        {/* IMPORT FROM /assets/include/FontAwesome.html */}
        <script src="https://kit.fontawesome.com/d07da7e4d9.js" crossOrigin="anonymous" async></script>
        <link href="/assets/css/mildert.css" rel="stylesheet" />
      </head>
      {/* End Temp Head */}
      <body className={inter.className + " pt-md-3"}>
        <Navbar />
        <div className="d-flex align-items-center text-center" style={{minHeight: "calc(100vh - 105px)"}}>
          <div id="content" className="container text-center bg-body-secondary rounded" style={{minHeight: "0"}}>
            {children}
          </div>
        </div>
        {/* IMPORT FROM footer.html */}
        <div id="footer" className="container-fluid mt-md-3 py-2 bg-body-tertiary">
            <p className="text-center mb-0">
                This website is operated by Van Mildert College Junior Common Room,
                a charity (CIO) registered in England and Wales
                (<a href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5161238"
                    target="_blank">1190990</a>).
                Copyright Van Mildert College JCR.
            </p>
        </div>
        {/* IMPORT FROM foot.html */}
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossOrigin="anonymous" async></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous" async></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" async></script>
        <script src="/assets/js/colourmode.js" async></script>
      </body>
    </html>
  )
}
