import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const items = [
  "Do you miss phone calls during the day because your team is busy?",
  "Do website leads sometimes sit for hours before someone responds?",
  "Do some leads only get one reply and never hear from your business again?",
  "Do you have older leads in your database that were never followed up with?",
  "Have you ever wondered why competitors seem to win jobs even when you received the lead first?",
];

export function DiagnosisSection() {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const scrollToQuiz = () => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const count = checked.filter(Boolean).length;

  return (
    <section id="diagnosis" className="py-24 px-4 section-alt">
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="teal-badge mb-5 inline-block">Quick Check</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            Are You Losing Leads Without Realizing It?
          </h2>
          <p className="mt-4" style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Many service businesses believe their marketing is the problem. But often the real issue is what happens after a lead comes in. Take a quick look.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col gap-3">
              {items.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => toggle(i)}
                  className="flex items-start gap-4 text-left p-4 rounded-xl transition-all"
                  style={{
                    background: checked[i] ? "rgba(13,148,136,0.06)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${checked[i] ? "rgba(13,148,136,0.3)" : "rgba(255,255,255,0.06)"}`,
                  }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-all"
                    style={{
                      background: checked[i] ? "var(--teal)" : "transparent",
                      border: `2px solid ${checked[i] ? "var(--teal)" : "rgba(255,255,255,0.2)"}`,
                    }}
                  >
                    <AnimatePresence>
                      {checked[i] && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Check size={12} color="white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span style={{ fontSize: 15, color: checked[i] ? "var(--text-primary)" : "var(--text-secondary)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-5 text-sm text-center" style={{ color: "var(--text-muted)" }}>
              {count > 0 ? `${count} out of ${items.length} checked` : "Click any item that applies to your business"}
            </div>

            <AnimatePresence>
              {count >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 rounded-xl px-6 py-4"
                  style={{
                    background: "rgba(13,148,136,0.08)",
                    border: "1px solid rgba(13,148,136,0.2)",
                  }}
                >
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--teal)", fontWeight: 600 }}>If even one of these sounds familiar</span>, there is a strong chance your business has a lead leak. The good news: it is fixable once you know where the leak is.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center">
            <button onClick={scrollToQuiz} className="btn-teal px-8 py-4 rounded-xl text-[16px] font-semibold teal-glow">
              Find My Lead Leak
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
