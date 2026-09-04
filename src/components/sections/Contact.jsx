import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";
import RevealOnScroll from "../ui/RevealOnScroll.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Section from "../layout/Section.jsx";
import Button from "../ui/Button.jsx";
import { contactInfo } from "../../constants/content.js";

const fields = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "company", label: "Company", type: "text", required: false },
  { id: "email", label: "Email", type: "email", required: true },
];

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Honeypot: bots tend to fill every field, humans never see this one.
    // (checkboxes always report value="on" regardless of checked state, so use .checked)
    if (form.botcheck.checked) return;

    setStatus("sending");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Sample Request - Viceroy Coffees",
      from_name: "Viceroy Coffees Website",
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <fieldset disabled={status === "sending"} className="flex flex-col gap-5 disabled:opacity-60">
              {fields.map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-1.5 block text-xs font-medium text-primary/70">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
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
                  name="message"
                  rows={4}
                  required
                  placeholder="Roast preference, volume, delivery frequency..."
                  className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm focus:border-secondary"
                />
              </div>
            </fieldset>

            <Button type="submit" variant="primary" className="mt-2 w-fit" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending...
                </>
              ) : (
                "Request a Sample"
              )}
            </Button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 rounded-sm border border-green-600/20 bg-green-600/5 px-4 py-3"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-green-700" />
                  <p className="text-sm text-green-800">
                    Request received! Thank you for reaching out — our team will review your details and get back to
                    you shortly with a sample and quote.
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 rounded-sm border border-red-600/20 bg-red-600/5 px-4 py-3"
                >
                  <FaExclamationCircle className="mt-0.5 shrink-0 text-red-700" />
                  <p className="text-sm text-red-800">
                    Something went wrong sending your request. Please try again, or email us directly at{" "}
                    <a href={`mailto:${contactInfo.email}`} className="underline">
                      {contactInfo.email}
                    </a>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
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

          {/* Interactive Map Embed */}
          <div className="overflow-hidden rounded-md border border-primary/10 bg-primary/[0.04] aspect-video w-full relative group">
            <iframe
              title="Viceroy Coffees Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                contactInfo.address
              )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(30%) contrast(95%) sepia(25%) hue-rotate(340deg) brightness(95%)"
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
            />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
