// components/layout.js
import Navbar from "../Navbar"
import Head from "next/head"
export default function Layout({ children, textColor, bgColor }) {
  return (
    <>
       {/* <Head>
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Play&display=swap" as="font" />
      </Head> */}
      <Navbar textColor={textColor} bgColor={bgColor} />
      <div className="min-h-screen mx-auto px-5 mt-24">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
