import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past `threshold` px.
 * Passive listener, cleaned up on unmount.
 */
export function useScrolledPast(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
