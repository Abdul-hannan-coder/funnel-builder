import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

function StatCard({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="glass-card rounded-xl p-5 text-center"
    >
      <div className="stat-number">{count}{suffix}</div>
      <div className="mt-1 text-[13px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

export function CostSection() {
  return (
    <section className="py-24 px-4 section-base">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="teal-badge mb-5 inline-block">The Cost</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              Speed and Follow Up Decide Who Wins the Customer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Studies show the first company to respond usually wins the job. But most small businesses do not have a system built for speed. Leads are scattered across phone calls, website forms, and messages. Teams are busy. And without a clear process, follow up becomes inconsistent or forgotten entirely.
              </p>
            </motion.div>

            {/* Right: stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <StatCard value={78} suffix="%" label="of customers buy from the first responder" />
              <div className="glass-card rounded-xl p-5 text-center">
                <div className="stat-number">5 min</div>
                <div className="mt-1 text-[13px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>is the maximum response window before leads go cold</div>
              </div>
              <StatCard value={44} suffix="%" label="of businesses never follow up after first contact" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)" }}>
              That is where Stop Losing Leads HQ comes in.
            </p>
            <p className="mt-4 mx-auto" style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 640 }}>
              We install simple automation and AI systems that make sure every lead hears from your business quickly and consistently. No more missed calls. No more leads sitting untouched. No more wondering where the money went.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
