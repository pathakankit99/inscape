// components/layout.js
import Navbar from "../Navbar";

export default function Layout2({ children, textColor, bgColor }) {
  return (
    <>
      <Navbar textColor={textColor} bgColor={bgColor} />
      <div className="min-h-screen mx-auto">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
