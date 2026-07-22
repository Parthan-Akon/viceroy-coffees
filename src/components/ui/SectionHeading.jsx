import RevealOnScroll from "./RevealOnScroll.jsx";

/**
 * Every section uses this for its H2 -- keeps heading treatment identical
 * across the page instead of each section redefining size/spacing slightly
 * differently.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <RevealOnScroll>
      <div className={`mb-14 flex flex-col ${alignClass}`}>
        {eyebrow && (
          <span
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
              dark ? "text-accent" : "text-secondary"
            }`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`text-4xl font-medium sm:text-5xl ${
            dark ? "text-cream" : "text-primary"
          }`}
        >
          {title}
        </h2>
        <span
          className={`mt-5 h-px w-16 ${dark ? "bg-accent" : "bg-accent"}`}
          aria-hidden="true"
        />
        {description && (
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
              dark ? "text-cream/70" : "text-primary/70"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
}
