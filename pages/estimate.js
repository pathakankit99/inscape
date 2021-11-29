import Head from "next/head";
import Layout2 from "../components/Layout2";
import Estimates from "../components/Estimates"
export default function Home() {
  return (
    <Layout2 title="Inscape-Free Estimates">
      <Estimates/>
    </Layout2>
  );
}
