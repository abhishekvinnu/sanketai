import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ResultCard, VerificationStatus } from "@/components/ResultCard";
import { GuidanceSection } from "@/components/GuidanceSection";
import { LegalAwarenessSection } from "@/components/LegalAwarenessSection";
import { ReportingSection } from "@/components/ReportingSection";
import { Footer } from "@/components/Footer";

interface VerificationResult {
  status: VerificationStatus;
  confidence: number;
  summary: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleVerify = useCallback(async (text: string) => {
    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:8080/api/verify-news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      if (!res.ok) throw new Error("Backend error");

      const data = await res.json();

      let status: VerificationStatus = "misleading";

      if (data.verdict === "LIKELY FACTUAL") status = "real";
      else if (data.verdict === "POTENTIALLY MISLEADING") status = "fake";
      else status = "misleading";

      const summary =
        data.verdict === "LIKELY FACTUAL"
          ? "This content appears credible based on AI analysis."
          : data.verdict === "POTENTIALLY MISLEADING"
          ? "This content shows signs of misinformation. Please avoid sharing."
          : "This content may be misleading. Further verification is recommended.";

      setResult({
        status,
        confidence: data.confidence,
        summary
      });

    } catch (error) {
      alert("Backend not reachable. Make sure Spring Boot is running.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <HeroSection onVerify={handleVerify} isLoading={isLoading} />

        {result && (
          <section className="py-8 md:py-12">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl space-y-6">

                <ResultCard
                  status={result.status}
                  confidence={result.confidence}
                  summary={result.summary}
                />

                <GuidanceSection status={result.status} />
                <LegalAwarenessSection status={result.status} />
                <ReportingSection status={result.status} />

              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
