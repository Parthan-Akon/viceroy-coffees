import logo from "../../assets/logo/viceroy-logo.png";
import { footerLinks, industries, tagline, contactInfo } from "../../constants/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream/80">
      <div className="content-wrap grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Viceroy Coffees" className="h-16 w-auto opacity-95" />
          <p className="mt-4 max-w-xs text-sm italic text-cream/60">{tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {footerLinks.quick.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            We Serve
          </h3>
          <ul className="space-y-3 text-sm">
            {industries.slice(0, 4).map((i) => (
              <li key={i.label}>{i.label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li className="flex gap-4 pt-2">
              {footerLinks.social.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-accent">
                  {s.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="content-wrap text-xs text-cream/40">
          &copy; {year} Viceroy Coffees. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
