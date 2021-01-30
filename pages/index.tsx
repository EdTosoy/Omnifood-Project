import Contact from "components/Contacts";
import Features from "components/Features";
import Footer from "components/Footer";
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
        <meta
          name="description"
          content="Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise! "
        />
      </Head>
      <Header />
      <Features />
      <ShowCase />
      <HowItWorks />
      <Locations />
      <Testimonials />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}
