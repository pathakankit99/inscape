// components/layout.js
import Navbar from "../Navbar"

export default function Layout({ children, textColor, bgColor }) {
  return (
    <>
      <Navbar textColor={textColor} bgColor={bgColor} />
      <div className="min-h-screen mx-auto px-5 mt-24">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
