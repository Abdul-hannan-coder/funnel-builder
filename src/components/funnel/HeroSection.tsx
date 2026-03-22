import { motion } from "framer-motion";
import { LeadLeakDiagram } from "./LeadLeakDiagram";

export function HeroSection() {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSnapshot = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 section-base dot-grid overflow-hidden"
    >
      {/* Ambient teal orb */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <span className="teal-badge mb-5 text-[11px] md:text-[13px]">For Service Businesses Losing Leads</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "clamp(30px, 7vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            wordBreak: "break-word",
          }}
        >
          Stop Losing the Leads You{" "}
          <span style={{ color: "var(--teal)" }}>Already Paid For</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 mx-auto w-full"
          style={{
            fontSize: "clamp(15px, 3.5vw, 18px)",
            color: "var(--text-secondary)",
            maxWidth: 560,
            lineHeight: 1.7,
          }}
        >
          Most service businesses are not struggling with marketing. They are losing money because missed calls, slow replies, and weak follow up let real opportunities slip away. We install the systems that respond instantly, nurture automatically, and turn more of your existing leads into booked customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-7 flex flex-col gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:flex-row sm:justify-center"
        >
          <button
            onClick={scrollToSnapshot}
            className="btn-teal px-6 py-3.5 rounded-xl text-[15px] font-semibold teal-glow w-full sm:w-auto"
          >
            Get My Free Lead Snapshot
          </button>
          <button
            onClick={scrollToQuiz}
            className="btn-teal-outline px-6 py-3.5 rounded-xl text-[15px] font-semibold w-full sm:w-auto"
          >
            Book My Lead Leak Diagnostic
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Takes 2 minutes. Free. No commitment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-10 w-full overflow-x-hidden"
        >
          <LeadLeakDiagram />
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />
    </section>
  );
}
