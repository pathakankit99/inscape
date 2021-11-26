import 'tailwindcss/tailwind.css'
import 'aos/dist/aos.css'
import "../style/index.css";
import "../pages/auth/style.css"
import "../components/Navbar/style.css";
// Homepage css
import "../components/Homepage/homepage.scss";
import "../components/Homepage/Hero/style.scss";
import "../components/Homepage/Services/style.scss";
import "../components/Homepage/cta/style.scss";
// pages/_app.js
import { useEffect } from 'react';
import { Provider } from "next-auth/client"
import AOS from 'aos';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}
