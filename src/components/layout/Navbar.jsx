import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useScrolledPast } from "../../hooks/useScrollPosition.js";
import { nav } from "../../constants/content.js";
import Button from "../ui/Button.jsx";

export default function Navbar() {
  const scrolled = useScrolledPast(80);
  const [open, setOpen] = useState(false);

  const textColor = scrolled || open ? "text-primary" : "text-cream";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-premium-out ${
        scrolled || open ? "bg-cream/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="content-wrap flex h-20 items-center justify-between">
        <a
          href="#home"
          className={`font-display text-2xl font-semibold tracking-wide transition-colors ${
            scrolled || open ? "text-primary" : "text-cream"
          }`}
        >
          Viceroy Coffees
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${textColor}`}
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact" variant="primary" className="!py-3">
            {nav.cta.label}
          </Button>
        </div>

        {/* Mobile toggle -- large touch target */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-sm md:hidden ${textColor}`}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <div className="content-wrap flex flex-col gap-1 pb-8 pt-2">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-2 py-4 text-base font-medium text-primary hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contact"
                variant="primary"
                onClick={() => setOpen(false)}
                className="mt-3 w-full"
              >
                {nav.cta.full}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
