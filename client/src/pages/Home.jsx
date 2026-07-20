import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Features/>
      <Testimonials />
      <Footer/>
    </>
  );
}

export default Home;
