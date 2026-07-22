import { motion } from "framer-motion";

/**
 * Standard entrance animation: fade + slide-up, triggered once. `once:true`
 * is the default and is NOT exposed as a prop that's easy to flip --
 * repeat-on-scroll reveals are a deliberate anti-pattern for this brief
 * (reads as gimmicky, not premium). Use `delay` for staggering siblings.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  as = "div",
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
