import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import Card from "../ui/Card.jsx";
import { whyChooseUs } from "../../constants/content.js";

export default function WhyChooseUs() {
  const primary = whyChooseUs.filter((f) => f.primary);
  const secondary = whyChooseUs.filter((f) => !f.primary);

  return (
    <Section className="bg-primary/[0.03]">
      <SectionHeading
        eyebrow="Why Viceroy"
        title="Built for businesses that can't afford inconsistency"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {primary.map((f, i) => (
          <RevealOnScroll key={f.title} delay={i * 0.08}>
            <Card className="h-full">
              <f.icon className="mb-5 text-3xl text-secondary" />
              <h3 className="mb-2 text-xl font-medium font-display">{f.title}</h3>
              <p className="text-sm leading-relaxed text-primary/70">{f.desc}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {secondary.map((f, i) => (
          <RevealOnScroll key={f.title} delay={0.24 + i * 0.08}>
            <div className="flex items-center gap-4 rounded-md border border-primary/10 bg-white/40 px-6 py-5">
              <f.icon className="shrink-0 text-xl text-accent" />
              <div>
                <h4 className="text-sm font-semibold">{f.title}</h4>
                <p className="text-xs text-primary/60">{f.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
