// components/layout.js
import Navbar from "../Navbar";
import Head from "next/head"
import Footer from "../Footer"
export default function Layout2({ children, textColor, bgColor,title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* ...metaTags */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          as="font"
        />
        {/* <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          as="font"
        /> */}
      </Head>
      <Navbar textColor={textColor} bgColor={bgColor} />
      <div className="min-h-screen mx-auto">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
