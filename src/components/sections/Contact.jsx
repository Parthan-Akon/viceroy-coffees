import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import Button from "../ui/Button.jsx";
import { contactInfo } from "../../constants/content.js";

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "company", label: "Company", type: "text" },
  { id: "email", label: "Email", type: "email" },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        align="left"
        eyebrow="Get In Touch"
        title="Request a Sample"
        description="Tell us about your business and volume, we'll follow up with a sample and a quote."
      />

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <RevealOnScroll>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {fields.map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="mb-1.5 block text-xs font-medium text-primary/70">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm focus:border-secondary"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-primary/70">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Roast preference, volume, delivery frequency..."
                className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm focus:border-secondary"
              />
            </div>
            <Button type="submit" variant="primary" className="mt-2 w-fit">
              Request a Sample
            </Button>
          </form>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="flex flex-col gap-6">
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaPhone className="text-secondary" /> {contactInfo.phone}
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-secondary" /> {contactInfo.email}
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary" /> {contactInfo.address}
            </div>
          </div>

          {/* Map placeholder -- swap for a real embed when the address is final */}
          <div className="flex aspect-video w-full items-center justify-center rounded-md border border-primary/10 bg-primary/[0.04] text-sm text-primary/40">
            Map placeholder
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
