import { motion } from "framer-motion";

export function LeadLeakDiagram() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex items-center justify-center gap-2 py-4 select-none flex-wrap">
        {/* Leads coming in */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] md:text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Leads In</span>
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "var(--teal)", opacity: 0.8 }}
              />
            ))}
          </div>
        </div>

        <div style={{ color: "var(--text-muted)", fontSize: 16 }}>→</div>

        {/* Leaky pipe */}
        <div className="relative flex flex-col items-center">
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-2 text-center" style={{ color: "var(--text-muted)" }}>Without System</span>
          <div
            className="relative rounded-lg overflow-visible"
            style={{ width: 70, height: 88, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
          >
            {[18, 46, 70].map((top, i) => (
              <div key={i} className="absolute" style={{ top, left: -2, right: -2 }}>
                <div style={{ height: 2, background: "rgba(239,68,68,0.5)", borderRadius: 1 }} />
                <motion.div
                  animate={{ y: [0, 14], opacity: [1, 0] }}
                  transition={{ duration: 1, delay: i * 0.4, repeat: Infinity, ease: "easeIn" }}
                  className="absolute"
                  style={{ width: 5, height: 5, borderRadius: "50%", background: "#ef4444", left: "50%", top: 2, transform: "translateX(-50%)" }}
                />
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <span style={{ fontSize: 10, color: "rgba(239,68,68,0.7)", fontWeight: 600 }}>Leaking</span>
            </div>
          </div>
          <span className="mt-1 text-[10px]" style={{ color: "rgba(239,68,68,0.7)" }}>Leads Lost</span>
        </div>

        <div style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: 700 }}>VS</div>

        {/* Sealed pipe */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-2 text-center" style={{ color: "var(--text-muted)" }}>With System</span>
          <div
            className="relative rounded-lg"
            style={{ width: 70, height: 88, background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.3)", boxShadow: "0 0 20px rgba(13,148,136,0.15)" }}
          >
            <motion.div
              animate={{ y: [4, 76], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
              className="absolute"
              style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", left: "50%", transform: "translateX(-50%)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span style={{ fontSize: 10, color: "var(--teal)", fontWeight: 600 }}>Sealed</span>
            </div>
          </div>
          <span className="mt-1 text-[10px] teal-text font-semibold">Booked Jobs</span>
        </div>

        <div style={{ color: "var(--teal)", fontSize: 16 }}>→</div>

        {/* Revenue */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] md:text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Revenue</span>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--teal)", boxShadow: "0 0 6px rgba(13,148,136,0.5)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
