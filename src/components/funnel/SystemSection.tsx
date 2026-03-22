import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

const steps = [
  {
    num: "01",
    title: "Instant Response",
    desc: "Every lead gets a response within seconds of contacting your business. No delays. No missed windows.",
    features: ["Missed call text back", "Instant form response", "After hours automation"],
  },
  {
    num: "02",
    title: "Automated Follow Up",
    desc: "Leads are nurtured through automated sequences until they are ready to book. No manual chasing.",
    features: ["Multi-step SMS and email sequences", "Smart timing based on lead behavior", "Re-engagement for cold leads"],
  },
  {
    num: "03",
    title: "Pipeline and Tracking",
    desc: "Every lead is organized, tagged, and tracked through a clear pipeline. You always know where each lead stands.",
    features: ["Visual pipeline dashboard", "Automatic lead scoring", "Booking calendar integration"],
  },
];

export function SystemSection() {
  const scrollToQuiz = () => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="system" className="py-24 px-4 section-alt">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="teal-badge mb-5 inline-block">The Fix</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              The System That Stops the Leak
            </h2>
            <p className="mt-4 mx-auto" style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 560 }}>
              We install the response and follow up systems that most businesses never build. No tech headaches. No learning curve. We handle everything.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6">
            {/* Connecting dashes */}
            <div
              className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px pointer-events-none"
              style={{ borderTop: "2px dashed rgba(13,148,136,0.15)" }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 flex flex-col"
                style={{ borderTop: "2px solid var(--teal)" }}
              >
                <div className="teal-text-glow mb-3" style={{ fontSize: 48, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>{step.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {step.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2" style={{ fontSize: 13, color: "var(--text-muted)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--teal)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button onClick={scrollToQuiz} className="btn-teal px-8 py-4 rounded-xl text-[16px] font-semibold teal-glow">
              Book My Lead Leak Diagnostic
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
