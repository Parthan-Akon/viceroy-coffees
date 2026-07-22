import Section from "../layout/Section.jsx";
import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import { images } from "../../constants/images.js";

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Philosophy
          </span>
          <h2 className="text-4xl font-medium sm:text-5xl">
            Sourced with intent. Roasted with restraint.
          </h2>
          <blockquote className="my-8 border-l-2 border-accent pl-6 font-display text-2xl italic text-secondary">
            "We work directly with a small circle of growers -- not a commodity market -- because
            consistency starts at the farm, not the roaster."
          </blockquote>
          <p className="text-base leading-relaxed text-primary/75 sm:text-lg">
            Every relationship we hold with a farm is chosen, not brokered. That means we know the
            altitude, the processing method, and the harvest calendar behind every bag we roast.
            It's a slower way to build a supply chain, but it's the only way to guarantee that the
            cup a café serves in December tastes like the one they served in June.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="relative">
          <img
            src={images.about}
            alt="Hands sorting green coffee beans by hand"
            className="aspect-[4/5] w-full rounded-md object-cover shadow-lg"
            loading="lazy"
          />
        </RevealOnScroll>
      </div>
    </Section>
  );
}
