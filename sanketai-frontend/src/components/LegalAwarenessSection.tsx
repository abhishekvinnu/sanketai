import { Scale, Info, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerificationStatus } from "./ResultCard";

interface LegalAwarenessSectionProps {
  status: VerificationStatus;
}

export function LegalAwarenessSection({ status }: LegalAwarenessSectionProps) {
  if (status === "real" || !status) return null;

  return (
    <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
      <Card className="border-muted-foreground/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-primary/10">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            Legal Awareness (India)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p>
                Spreading false or misleading information that causes public
                harm may attract provisions under
                Section 197(1)(d), 353(1)(b) of {" "}
                <strong>Bharatiya Nyaya Sanhita (BNS) Act, 2000</strong> and{" "}
                <strong>Section 66D Information Technology Act, 2000</strong>.
                These laws aim to protect citizens from harmful misinformation.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
            <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Important Note
              </p>
              <p className="text-sm text-muted-foreground">
                This information is for awareness purposes only and does not
                constitute legal advice. For specific legal guidance, please
                consult a qualified legal professional.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
