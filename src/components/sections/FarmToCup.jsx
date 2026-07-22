import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import { farmToCupStages } from "../../constants/content.js";

export default function FarmToCup() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  return (
    <Section id="process" dark>
      <SectionHeading
        eyebrow="Our Process"
        title="Farm to Cup"
        dark
        description="Six stages, the same care at every one -- from the farms we've chosen to the delivery on your dock."
      />

      <div ref={ref} className="relative mx-auto max-w-2xl">
        {/* Static track */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-cream/15" aria-hidden="true" />
        {/* Animated fill, grows with scroll progress through this section */}
        <motion.div
          className="absolute left-[15px] top-2 w-px origin-top bg-accent"
          style={{ scaleY: lineScale, bottom: 2 }}
          aria-hidden="true"
        />

        <ol className="relative flex flex-col gap-12">
          {farmToCupStages.map((stage, i) => (
            <motion.li
              key={stage.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-6 pl-1"
            >
              <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent bg-dark text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1 font-display text-xl font-medium text-cream">{stage.title}</h3>
                <p className="text-sm text-cream/60">{stage.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
