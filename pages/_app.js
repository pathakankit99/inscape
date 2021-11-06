import 'tailwindcss/tailwind.css'
import "../style/index.css";
import "../pages/auth/style.css"
import "../components/Navbar/style.css"

// pages/_app.js
import { Provider } from "next-auth/client"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}
