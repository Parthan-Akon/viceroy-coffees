import { motion } from "framer-motion";

/**
 * Deliberately dumb: handles surface, border, radius, and hover-lift only.
 * Each section composes its own content inside -- this does NOT try to be
 * a one-size-fits-all card with a dozen optional props.
 */
export default function Card({ className = "", dark = false, children, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-md border ${
        dark
          ? "border-cream/15 bg-cream/[0.04]"
          : "border-primary/10 bg-white/60"
      } p-8 shadow-sm hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
