import Contact from "components/Contacts";
import Features from "components/Features";
import HowItWorks from "components/HowItWorks";
import Locations from "components/Locations";
import Plans from "components/Plans";
import ShowCase from "components/ShowCase";
import Testimonials from "components/Testimonials";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Omnifood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Features />
      <ShowCase />
      <HowItWorks />
      <Locations />
      <Testimonials />
      <Plans />
      <Contact />
    </div>
  );
}
