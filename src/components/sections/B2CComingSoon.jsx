import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import Button from "../ui/Button.jsx";

export default function B2CComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-6 sm:py-10">
      <div className="content-wrap">
        <RevealOnScroll>
          <div className="flex flex-col items-center gap-6 rounded-lg bg-accent/20 px-8 py-14 text-center sm:px-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Coming Soon
            </span>
            <h3 className="max-w-xl font-display text-3xl font-medium text-primary sm:text-4xl">
              Viceroy Coffees, brewed at home
            </h3>
            <p className="max-w-md text-sm text-primary/70 sm:text-base">
              We're bringing our beans direct to your kitchen. Leave your email and be first to
              know when online ordering opens.
            </p>

            {submitted ? (
              <p className="text-sm font-medium text-secondary">
                You're on the list -- we'll be in touch.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="b2c-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="b2c-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-primary placeholder:text-primary/40"
                />
                <Button type="submit" variant="primary" className="shrink-0">
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
