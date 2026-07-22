import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-primary text-cream hover:bg-dark",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-cream",
  "outline-light":
    "border border-cream text-cream hover:bg-cream hover:text-dark",
  ghost:
    "text-primary hover:text-secondary",
};

/**
 * Shared button used across every section. Never redefine button styles
 * inline in a section component -- add a variant here instead.
 */
export default function Button({
  as = "button",
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}) {
  const Component = as === "a" || href ? "a" : motion.button;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ease-premium-out";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (Component === "a") {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={classes}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
