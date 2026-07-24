import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import { products } from "../../constants/products.js";

function RatioBar({ ratio, dark }) {
  return (
    <div className="mb-6">
      <div
        className={`flex h-2 w-full overflow-hidden rounded-full ${dark ? "bg-cream/15" : "bg-primary/10"
          }`}
      >
        <div
          className={dark ? "h-full bg-cream" : "h-full bg-primary"}
          style={{ width: `${ratio.arabica}%` }}
        />
        <div className="h-full bg-accent" style={{ width: `${ratio.robusta}%` }} />
      </div>
      <div
        className={`mt-2 flex justify-between text-[11px] uppercase tracking-wide ${dark ? "text-cream/60" : "text-primary/50"
          }`}
      >
        <span>Arabica {ratio.arabica}%</span>
        <span>Robusta {ratio.robusta}%</span>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Section id="products">
      <SectionHeading
        eyebrow="Coffee Blends"
        title="Four blends. One consistent standard."
        description="Every blend is graded and cupped before it leaves our roastery, pick a starting point, or ask us to build a custom ratio around your equipment."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <RevealOnScroll key={p.id} delay={i * 0.08} className={p.featured ? "lg:-mt-4" : ""}>
            <div
              className={`flex h-full flex-col rounded-md p-8 transition-shadow duration-300 ${p.featured
                ? "border-2 border-accent bg-primary text-cream shadow-lg"
                : "border border-primary/10 bg-white/60 shadow-sm hover:shadow-md"
                }`}
            >
              {p.badge && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-dark">
                  {p.badge}
                </span>
              )}
              <h3
                className={`mb-4 font-display text-2xl font-medium ${p.featured ? "text-cream" : "text-primary"
                  }`}
              >
                {p.name}
              </h3>

              <RatioBar ratio={p.ratio} dark={p.featured} />

              <p className={`text-sm leading-relaxed ${p.featured ? "text-cream/80" : "text-primary/70"}`}>
                {p.note}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
