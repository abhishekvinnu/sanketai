import { AlertCircle, Share2, Search, Flag, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VerificationStatus } from './ResultCard';

interface GuidanceSectionProps {
  status: VerificationStatus;
}

const guidanceItems = [
  {
    icon: Share2,
    title: "Avoid Forwarding",
    description: "Do not share this content until verified by multiple trusted sources."
  },
  {
    icon: Search,
    title: "Cross-Check Sources",
    description: "Verify with reputed news outlets like PTI, Reuters, or official government sources."
  },
  {
    icon: Flag,
    title: "Report if Harmful",
    description: "If the content causes panic or harm, consider reporting it to the platform or authorities."
  },
  {
    icon: ShieldAlert,
    title: "Stay Vigilant",
    description: "Be cautious of sensational headlines and verify before believing or sharing."
  },
];

export function GuidanceSection({ status }: GuidanceSectionProps) {
  if (status === 'real' || !status) return null;

  return (
    <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
      <Card className="border-warning/30 bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-warning/10">
              <AlertCircle className="w-5 h-5 text-warning" />
            </div>
            What You Can Do Now
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {guidanceItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 rounded-lg bg-card border border-border/50 transition-all hover:shadow-card"
              >
                <div className="shrink-0 p-2 rounded-md bg-muted">
                  <item.icon className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
