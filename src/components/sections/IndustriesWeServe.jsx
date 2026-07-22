import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import { industries } from "../../constants/content.js";

export default function IndustriesWeServe() {
  return (
    <Section>
      <SectionHeading eyebrow="Who We Supply" title="Industries We Serve" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((ind, i) => (
          <RevealOnScroll key={ind.label} delay={i * 0.05}>
            <div className="flex flex-col items-center gap-3 rounded-md border border-primary/10 bg-white/50 px-4 py-8 text-center transition-transform duration-200 hover:-translate-y-1">
              <ind.icon className="text-3xl text-secondary" />
              <span className="text-sm font-medium">{ind.label}</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
