import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const withSystem = [
  "Leads get instant responses",
  "Calls trigger automatic follow up",
  "Leads are organized and tracked",
  "Your calendar fills without you chasing anyone",
  "Marketing spend turns into revenue",
];

const withoutSystem = [
  "Leads sit in inboxes untouched",
  "Calls go unanswered and never returned",
  "Follow up happens randomly or not at all",
  "Competitors win the jobs you paid to generate",
  "The leak gets worse as you scale",
];

export function SuccessFailureSection() {
  return (
    <section className="py-24 px-4 section-alt">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Two Futures. Your Call.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Success */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 className="mb-5" style={{ fontSize: 20, fontWeight: 600, color: "#22c55e" }}>With a System</h3>
              <ul className="flex flex-col gap-3">
                {withSystem.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} color="#22c55e" className="flex-shrink-0 mt-0.5" />
                    <span style={{ fontSize: 15, color: "var(--text-secondary)" }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Failure */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 className="mb-5" style={{ fontSize: 20, fontWeight: 600, color: "#ef4444" }}>Without a System</h3>
              <ul className="flex flex-col gap-3">
                {withoutSystem.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle size={18} color="#ef4444" className="flex-shrink-0 mt-0.5" />
                    <span style={{ fontSize: 15, color: "var(--text-secondary)" }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
