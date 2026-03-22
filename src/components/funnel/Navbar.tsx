import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-10 h-14"
      style={{
        background: scrolled ? "rgba(10,15,26,0.9)" : "rgba(10,15,26,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.3s",
      }}
    >
      <span
        className="text-[15px] md:text-[18px] font-bold truncate mr-3"
        style={{ color: "var(--text-primary)", fontFamily: "'Plus Jakarta Sans', sans-serif", flexShrink: 1 }}
      >
        StopLosingLeadsHQ
      </span>
      <button
        onClick={scrollToQuiz}
        className="btn-teal flex-shrink-0 px-3 md:px-5 py-2 rounded-lg text-[12px] md:text-[14px] teal-glow whitespace-nowrap"
      >
        Book My Diagnostic
      </button>
    </motion.nav>
  );
}
