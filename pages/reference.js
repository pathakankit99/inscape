import Head from 'next/head'
import Link from "next/link"
import Header from '../components/Header'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="background p-24">
        <h1 className="heading">Heading</h1>
        <h2 className="sub-heading">sub Heading</h2>
        <p className="paragraph">Paragraph</p>
      </div>

      <div className="background2 p-24">
        <h1 className="heading2">Heading2</h1>
        <h2 className="sub-heading2">sub Heading2</h2>
        <p className="paragraph2">Paragraph2</p>
      </div>

      <div className="background3 p-24">
        <h1 className="heading3">Heading3</h1>
        <h2 className="sub-heading3">sub Heading3</h2>
        <p className="paragraph3">Paragraph3</p>
      </div>
    </div>
  );
}
