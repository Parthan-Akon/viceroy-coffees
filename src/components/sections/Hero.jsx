import { motion } from "framer-motion";
import { images } from "../../constants/images.js";
import { nav, tagline } from "../../constants/content.js";
import Button from "../ui/Button.jsx";
import logo from "../../assets/logo/viceroy-logo.png";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={images.hero}
        alt="Coffee roastery interior with roasted beans"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
      />
      {/* Functional gradient for text legibility -- the one gradient permitted in this design */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="content-wrap relative z-10 flex flex-col items-start pt-20"
      >
        <motion.img
          variants={item}
          src={logo}
          alt=""
          aria-hidden="true"
          className="mb-8 h-20 w-auto opacity-95 sm:h-24"
        />

        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-medium text-cream sm:text-6xl lg:text-7xl"
        >
          Premium Coffee Crafted for Exceptional Businesses
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg"
        >
          Freshly roasted coffee beans sourced from selected farms across South India.
        </motion.p>

        <motion.p variants={item} className="mt-2 text-sm italic text-accent">
          {tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button as="a" href="#contact" variant="primary">
            {nav.cta.full}
          </Button>
          <Button as="a" href="#products" variant="outline-light">
            Explore Products
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
