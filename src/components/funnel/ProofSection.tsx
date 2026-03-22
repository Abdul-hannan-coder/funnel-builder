import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} className="stat-number">{count}{suffix}</div>;
}

const stats = [
  { value: 500, suffix: "+", label: "Leads Recovered" },
  { value: 48, suffix: "hrs", label: "Average Time to Results" },
  { value: 3, suffix: "x", label: "Booking Rate Lift" },
  { value: 40, suffix: "%", label: "Leads Most Businesses Lose" },
];

const testimonials = [
  {
    quote: "We had no idea how many leads were falling through the cracks. Within a week we booked 12 extra jobs we would have completely missed.",
    name: "Mike R.",
    role: "HVAC Company Owner, Phoenix",
  },
  {
    quote: "I was spending $4k a month on ads and losing nearly half to slow follow up. Their system paid for itself in the first week.",
    name: "Dave K.",
    role: "Plumbing Business, Dallas",
  },
  {
    quote: "The speed to lead difference is insane. Leads get answered in seconds now instead of hours.",
    name: "Sarah T.",
    role: "Electrical Contractor, Tampa",
  },
];

const rows = [
  { left: "Focus on generating new leads", right: "Focus on converting leads you already have" },
  { left: "Send you more traffic", right: "Build the system that answers and follows up with that traffic" },
  { left: "Monthly ad spend with unpredictable ROI", right: "One time system install with immediate measurable impact" },
  { left: "You need more budget to get more leads", right: "You recover revenue from leads you already paid for" },
];

export function ProofSection() {
  return (
    <section className="py-24 px-4 section-base">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <CountUp target={s.value} suffix={s.suffix} />
                <div className="mt-1 text-[12px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-card rounded-2xl p-6 relative"
              >
                <span
                  className="absolute top-4 left-5 select-none pointer-events-none"
                  style={{ fontSize: 80, lineHeight: 1, color: "rgba(13,148,136,0.15)", fontFamily: "serif" }}
                >
                  "
                </span>
                <p className="mt-8 mb-5 relative z-10" style={{ fontSize: 15, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.7 }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Differentiation */}
          <div>
            <div className="text-center mb-8">
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                We Are Not a Marketing Agency
              </h2>
              <p className="mt-3" style={{ fontSize: 18, color: "var(--text-secondary)" }}>
                Marketing agencies focus on getting you more leads. We focus on making sure you do not lose the ones you already have.
              </p>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-2">
                <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(239,68,68,0.04)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Marketing Agencies</span>
                </div>
                <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(13,148,136,0.05)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Stop Losing Leads HQ</span>
                </div>
              </div>
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-2" style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div className="px-6 py-4 flex items-center" style={{ background: "rgba(239,68,68,0.02)" }}>
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{row.left}</span>
                  </div>
                  <div className="px-6 py-4 flex items-center" style={{ background: "rgba(13,148,136,0.03)", borderLeft: "1px solid rgba(255,255,255,0.04)", borderLeftWidth: 3, borderLeftColor: "rgba(13,148,136,0.3)" }}>
                    <span style={{ fontSize: 14, color: "var(--text-primary)" }}>{row.right}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
              style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)" }}
            >
              You do not need more leads if you are{" "}
              <span style={{ color: "var(--teal)" }}>still losing</span>{" "}
              the ones you already paid for.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
