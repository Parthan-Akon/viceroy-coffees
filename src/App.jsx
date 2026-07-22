import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import WhyChooseUs from "./components/sections/WhyChooseUs.jsx";
import Products from "./components/sections/Products.jsx";
import RoastProfiles from "./components/sections/RoastProfiles.jsx";
import FarmToCup from "./components/sections/FarmToCup.jsx";
import IndustriesWeServe from "./components/sections/IndustriesWeServe.jsx";
import B2CComingSoon from "./components/sections/B2CComingSoon.jsx";
import Contact from "./components/sections/Contact.jsx";

// Gallery intentionally omitted -- see constants/images.js note. Re-add
// once real photography exists; do not fill this slot with stock images.

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <RoastProfiles />
        <FarmToCup />
        <IndustriesWeServe />
        <B2CComingSoon />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
