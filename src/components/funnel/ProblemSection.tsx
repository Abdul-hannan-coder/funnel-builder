import { motion } from "framer-motion";
import { PhoneMissed, Clock, MessageCircleX, Users, Database } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const problems = [
  { icon: PhoneMissed, text: "A call comes in and nobody answers." },
  { icon: Clock, text: "A website form sits untouched for hours." },
  { icon: MessageCircleX, text: "A lead gets one reply and never hears back again." },
  { icon: Users, text: "A potential customer chooses the company that responded first." },
  { icon: Database, text: "Old leads sit forgotten in your database, never followed up." },
];

export function ProblemSection() {
  const scrollToQuiz = () => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="problem" className="py-24 px-4 section-alt">
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="teal-badge mb-5 inline-block">The Real Problem</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            The Problem Isn't Marketing. It's What Happens After the Lead Comes In.
          </h2>
          <p className="mt-4" style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Most service businesses are leaking money in the same places every day.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-2 overflow-hidden">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 px-5 py-4"
                style={{ borderBottom: i < problems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  <item.icon size={18} color="#ef4444" />
                </div>
                <span style={{ fontSize: 16, color: "var(--text-primary)" }}>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 rounded-xl px-6 py-5"
            style={{
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: "3px solid var(--teal)",
            }}
          >
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, fontStyle: "italic" }}>
              "Every one of these moments is a lost opportunity that already cost you money to generate."
            </p>
          </motion.div>

          {/* Core message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
            style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)" }}
          >
            You do not need more leads. You need a system that{" "}
            <span style={{ color: "var(--teal)" }}>responds faster and follows up better.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-center"
          >
            <button onClick={scrollToQuiz} className="btn-teal px-8 py-4 rounded-xl text-[16px] font-semibold teal-glow">
              Find My Lead Leak
            </button>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
