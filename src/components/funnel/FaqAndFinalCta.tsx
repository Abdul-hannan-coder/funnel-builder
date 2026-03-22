import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const faqs = [
  {
    q: "Do I need more leads before this makes sense?",
    a: "No. If you already get leads but struggle to respond quickly or follow up consistently, this matters right now. The system works with the leads you are already generating.",
  },
  {
    q: "Do you replace my marketing?",
    a: "No. We do not run ads or do SEO. We focus entirely on what happens after a lead comes in. Response speed, follow up, and conversion. Your marketing generates the leads. We make sure they do not disappear.",
  },
  {
    q: "How fast can this go live?",
    a: "The core system including instant response, missed call text back, and follow up sequences can be live within 72 hours. The full funnel page with custom design takes a bit longer depending on revisions.",
  },
  {
    q: "Is monthly monitoring required?",
    a: "No. You can choose setup only or ongoing monitoring. The system runs on its own once installed.",
  },
  {
    q: "What if I already have a CRM and it is not working?",
    a: "That is exactly who we help. A CRM without proper automations is just an expensive contact list. We turn it into a lead recovery machine.",
  },
  {
    q: "Do I need to be tech savvy?",
    a: "No. We handle the entire setup. You approve the plan, we build and install it. Most clients are fully live without touching a single setting.",
  },
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="rounded-xl overflow-hidden"
      style={{
        background: open ? "rgba(13,148,136,0.04)" : "rgba(255,255,255,0.02)",
        border: open ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(255,255,255,0.06)",
        borderLeft: open ? "2px solid var(--teal)" : "2px solid transparent",
        transition: "all 0.2s",
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} color="var(--text-muted)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-5" style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqAndFinalCta() {
  return (
    <>
      {/* FAQ */}
      <section className="py-24 px-4 section-base">
        <SectionWrapper>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-10" style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Common Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => <FaqItem key={i} item={faq} index={i} />)}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Final CTA */}
      <section
        id="final-cta"
        className="relative py-32 px-4 section-base overflow-hidden"
      >
        {/* Teal ambient orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />
        <SectionWrapper>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", lineHeight: 1.1 }}>
              Stop Paying for Leads You Never Convert
            </h2>
            <p className="mt-5 mx-auto" style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 580 }}>
              Every missed call, delayed reply, or forgotten follow up is money leaving your business. Stop Losing Leads HQ helps you respond faster, nurture better, and protect the leads you already paid for.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-teal px-8 py-4 rounded-xl text-[16px] font-semibold teal-glow-strong">
                Book My Lead Leak Diagnostic
              </button>
              <button className="btn-teal-outline px-8 py-4 rounded-xl text-[16px] font-semibold">
                Get My Free Lead Snapshot
              </button>
            </div>

            <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
              Free. No commitment. See where your leads are leaking.
            </p>

            {/* Core message - 3rd appearance */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-xl"
              style={{
                background: "rgba(13,148,136,0.05)",
                border: "1px solid rgba(13,148,136,0.15)",
              }}
            >
              <p style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.5 }}>
                "You do not need more leads. You need to{" "}
                <span style={{ color: "var(--teal)" }}>stop losing the ones you already paid for.</span>"
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "var(--base-bg)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            StopLosingLeadsHQ
          </span>
          <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
            (480) 415 5082 &nbsp;|&nbsp; info@stoplosingleadshq.com
          </span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
            © 2026 StopLosingLeads. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
