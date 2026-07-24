import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import { roasts } from "../../constants/roasts.js";

// Precomputed accent(#C69C6D) -> dark(#1F1A17) interpolation, one stop per
// intensity level. The color progression IS the information here -- this
// is why roast profiles get a spectrum layout instead of a plain 4x2 grid.
const intensityColor = {
  1: "#C69C6D",
  2: "#AE8961",
  3: "#967754",
  4: "#7E6448",
  5: "#67523C",
  6: "#4F3F30",
  7: "#372D23",
  8: "#1F1A17",
};

export default function RoastProfiles() {
  return (
    <Section className="bg-primary/[0.03]">
      <SectionHeading
        eyebrow="Roast Profiles"
        title="Eight profiles, light to Italian"
        description="Roast depth changes the whole cup, acidity, body, sweetness. Choose a starting profile, or we'll dial one in for your machine."
      />

      {/* Gradient spectrum bar -- desktop only, purely illustrative */}
      <div
        className="mb-4 hidden h-2 w-full rounded-full lg:block"
        style={{
          background: `linear-gradient(to right, ${roasts.map((r) => intensityColor[r.intensity]).join(", ")})`,
        }}
        aria-hidden="true"
      />

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-8 lg:gap-4 lg:overflow-visible lg:pb-0">
        {roasts.map((r, i) => (
          <RevealOnScroll
            key={r.id}
            delay={i * 0.05}
            className="w-[220px] shrink-0 snap-start lg:w-auto"
          >
            <div className="flex h-full flex-col items-start rounded-md border border-primary/10 bg-white/60 p-5">
              <span
                className="mb-4 h-3 w-3 rounded-full"
                style={{ backgroundColor: intensityColor[r.intensity] }}
                aria-hidden="true"
              />
              <h3 className="mb-1 text-lg font-semibold">{r.name}</h3>
              <p className="text-xs leading-relaxed text-primary/60">{r.note}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
