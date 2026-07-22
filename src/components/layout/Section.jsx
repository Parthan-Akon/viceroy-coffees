/**
 * Every page section wraps its content in this. Vertical rhythm and
 * max-width live here ONCE -- no section should hand-roll `py-24` inline,
 * or the spacing discipline drifts section by section during build.
 */
export default function Section({ id, dark = false, className = "", children }) {
  return (
    <section
      id={id}
      className={`w-full py-24 sm:py-28 lg:py-32 ${
        dark ? "bg-dark" : ""
      } ${className}`}
    >
      <div className="content-wrap">{children}</div>
    </section>
  );
}
