import 'tailwindcss/tailwind.css'
import "../style/index.css";
import "../pages/auth/style.css"
import "../components/Navbar/style.css";
import "../components/Homepage/homepage.scss";
import { ParallaxProvider } from "react-scroll-parallax";

// pages/_app.js
import { Provider } from "next-auth/client"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider session={session}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  );
}
