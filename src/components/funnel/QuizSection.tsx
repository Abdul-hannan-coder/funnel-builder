import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

const q1Options = [
  { label: "Within 5 minutes", color: "#22c55e", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" },
  { label: "Within 30 minutes", color: "var(--text-primary)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.08)" },
  { label: "Within a few hours", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  { label: "Next day or later", color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
];

const q2Options = [
  { label: "We send an automatic text", color: "var(--text-primary)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.08)" },
  { label: "Someone calls them back manually", color: "var(--text-primary)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.08)" },
  { label: "We follow up later", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  { label: "Nothing happens", color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
];

function OptionCard({ option, onSelect }: { option: typeof q1Options[0]; onSelect: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={onSelect}
      className="w-full text-left p-4 rounded-xl font-medium transition-all"
      style={{ background: option.bg, border: `1px solid ${option.border}`, color: option.color, fontSize: 15 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 16px rgba(13,148,136,0.12)" }}
      whileTap={{ scale: 0.98 }}
    >
      {option.label}
    </motion.button>
  );
}

export function QuizSection() {
  const [step, setStep] = useState(1);
  const [a1, setA1] = useState<string | null>(null);
  const [a2, setA2] = useState<string | null>(null);
  const scrollToFinal = () => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });

  const handleQ1 = (label: string) => {
    setA1(label);
    setTimeout(() => setStep(2), 400);
  };

  const handleQ2 = (label: string) => {
    setA2(label);
    setTimeout(() => setStep(3), 400);
  };

  return (
    <section id="quiz" className="py-24 px-4 section-base relative overflow-hidden">
      {/* Purple ambient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "50%",
          right: "-200px",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      />
      <SectionWrapper>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="teal-badge mb-5 inline-block">30 Second Lead Leak Check</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              Want to See If Your Business Has a Lead Leak?
            </h2>
            <p className="mt-3" style={{ fontSize: 18, color: "var(--text-secondary)" }}>
              Answer two quick questions. Takes less than 30 seconds.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <p className="mb-5 font-semibold" style={{ fontSize: 18, color: "var(--text-primary)" }}>
                  How quickly does your business usually respond to a new lead?
                </p>
                <div className="flex flex-col gap-3">
                  {q1Options.map((opt, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                      <OptionCard option={opt} onSelect={() => handleQ1(opt.label)} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <p className="mb-1 text-sm" style={{ color: "var(--text-muted)" }}>Question 2 of 2</p>
                <p className="mb-5 font-semibold" style={{ fontSize: 18, color: "var(--text-primary)" }}>
                  What happens when your business misses a phone call?
                </p>
                <div className="flex flex-col gap-3">
                  {q2Options.map((opt, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                      <OptionCard option={opt} onSelect={() => handleQ2(opt.label)} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "3px solid var(--teal)",
                }}
              >
                <div className="mb-4">
                  <span className="teal-badge">Lead Leak Risk: High</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>
                  Your Lead Leak Risk: <span style={{ color: "#ef4444" }}>High</span>
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
                  Based on your answers, there is a strong chance your business is losing leads due to response gaps and inconsistent follow up. You are not alone. Most service businesses have this exact problem.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
                  The next step is a quick Lead Leak Diagnostic where we walk through your lead flow and show you exactly where the money is slipping through.
                </p>
                <button
                  onClick={scrollToFinal}
                  className="btn-teal w-full py-4 rounded-xl text-[16px] font-semibold teal-glow mb-4"
                >
                  Continue to My Lead Leak Diagnostic
                </button>
                <div className="text-center">
                  <button
                    onClick={scrollToFinal}
                    className="text-sm underline underline-offset-2"
                    style={{ color: "var(--teal)" }}
                  >
                    or get a Free Lead Snapshot first
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress dots */}
          {step < 3 && (
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: step >= s ? "var(--teal)" : "rgba(255,255,255,0.15)" }}
                />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}
