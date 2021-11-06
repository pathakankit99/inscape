import Head from 'next/head'
import Layout2 from '../components/Layout2';
import Section1 from "../components/Homepage/Section1"
export default function Home() {
  return (
    <Layout2 textColor="text-affair-300" bgColor="bg-affair-300">
      <Section1/>
    </Layout2>
  );
}
