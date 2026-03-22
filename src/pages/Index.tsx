import { Navbar } from "@/components/funnel/Navbar";
import { HeroSection } from "@/components/funnel/HeroSection";
import { ProblemSection } from "@/components/funnel/ProblemSection";
import { CostSection } from "@/components/funnel/CostSection";
import { DiagnosisSection } from "@/components/funnel/DiagnosisSection";
import { QuizSection } from "@/components/funnel/QuizSection";
import { SystemSection } from "@/components/funnel/SystemSection";
import { ProofSection } from "@/components/funnel/ProofSection";
import { SuccessFailureSection } from "@/components/funnel/SuccessFailureSection";
import { FaqAndFinalCta } from "@/components/funnel/FaqAndFinalCta";

const Index = () => {
  return (
    <div style={{ background: "var(--base-bg)", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <CostSection />
      <DiagnosisSection />
      <QuizSection />
      <SystemSection />
      <ProofSection />
      <SuccessFailureSection />
      <FaqAndFinalCta />
    </div>
  );
};

export default Index;
