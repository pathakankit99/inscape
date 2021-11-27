import Head from "next/head";
import Layout2 from "../components/Layout2";
import Hero from "../components/Homepage/Hero";
import Services from "../components/Homepage/Services";
import Cta from "../components/Homepage/Cta";
import Contact from "../components/Homepage/Contact";
import Features from "../components/Homepage/Features";
export default function Home() {
  return (
    <Layout2 title="Inscape">
      <Hero />
      <Services />
      <Cta />
      <Features/>
      <Contact />
    </Layout2>
  );
}
