import Head from "next/head";
import Layout2 from "../components/Layout2";
import Section1 from "../components/Homepage/Section1";
import Section2 from "../components/Homepage/Section2";
import Section3 from "../components/Homepage/Section3";

import Section4 from "../components/Homepage/Section4";
import Section5 from "../components/Homepage/Section5";
export default function Home() {
  return (
    <Layout2 title="Inscape">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout2>
  );
}
