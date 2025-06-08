import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Schedule from "../components/Schedule";
import Travel from "../components/Travel";
import Registry from "../components/Registry";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Story />
        <Schedule />
        <Travel />
        <Registry />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
