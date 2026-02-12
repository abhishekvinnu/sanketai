import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  TrendingUp,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type VerificationStatus =
  | "real"
  | "fake"
  | "misleading"
  | "uncertain"
  | null;

interface ResultCardProps {
  status: VerificationStatus;
  confidence: number;
  summary: string;
}

const statusConfig = {
  real: {
    icon: CheckCircle2,
    title: "Verified as Real News",
    colorClass: "text-success",
    bgClass: "bg-success/10",
    borderClass: "border-success/30",
    progressClass: "bg-success",
    glowClass: "shadow-glow-success",
  },
  fake: {
    icon: XCircle,
    title: "Identified as Fake News",
    colorClass: "text-destructive",
    bgClass: "bg-destructive/10",
    borderClass: "border-destructive/30",
    progressClass: "bg-destructive",
    glowClass: "shadow-glow-danger",
  },
  misleading: {
    icon: AlertTriangle,
    title: "Potentially Misleading",
    colorClass: "text-warning",
    bgClass: "bg-warning/10",
    borderClass: "border-warning/30",
    progressClass: "bg-warning",
    glowClass: "",
  },
  uncertain: {
    icon: Info,
    title: "Needs Verification",
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/30",
    borderClass: "border-muted/40",
    progressClass: "bg-muted",
    glowClass: "",
  },
};

export function ResultCard({ status, confidence, summary }: ResultCardProps) {
  if (!status) return null;

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="animate-slide-up">
      <Card
        className={`overflow-hidden border-2 ${config.borderClass} ${config.glowClass} transition-all duration-300`}
      >
        <CardHeader className={`${config.bgClass} pb-4`}>
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl ${config.bgClass} ${config.colorClass}`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className={`text-2xl font-bold ${config.colorClass}`}>
                {config.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Confidence Score:{" "}
                  <span className={`font-bold ${config.colorClass}`}>
                    {confidence}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Analysis Confidence</span>
              <span className="font-medium">{confidence}%</span>
            </div>
            <Progress value={confidence} className="h-2" />
          </div>

          <div className="flex gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
            <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Analysis Summary
              </p>
              <p className="text-sm text-muted-foreground">{summary}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
