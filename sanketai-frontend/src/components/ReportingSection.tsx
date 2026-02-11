import { ExternalLink, Flag, MessageCircle, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VerificationStatus } from './ResultCard';

interface ReportingSectionProps {
  status: VerificationStatus;
}

const reportingLinks = [
  {
    icon: Globe,
    title: "Cyber Crime Portal",
    description: "Official Government of India portal for reporting cyber crimes",
    url: "https://cybercrime.gov.in/Webform/Accept.aspx",
    primary: true,
  },
  {
    icon: Flag,
    title: "PIB Fact Check",
    description: "Official Press Information Bureau fact-checking portal",
    url: "https://factcheck.pib.gov.in",
    primary: false,
  },
   {
    icon: MessageCircle,
    title: "Other Social Media Portals",
    description: "Report suspicious messages on social media platforms directly",
    url:  "https://www.pib.gov.in/FAQ_fact.aspx?reg=3&lang=2#main-nav",
    primary: false,
  },
];

export function ReportingSection({ status }: ReportingSectionProps) {
  if (status === 'real' || !status) return null;

  return (
    <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-destructive/10">
              <Flag className="w-5 h-5 text-destructive" />
            </div>
            Report Misinformation
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Reporting helps reduce the spread of harmful misinformation and protects others.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {reportingLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                  link.primary 
                    ? 'border-primary/30 bg-primary/5 hover:bg-primary/10' 
                    : 'border-border/50 bg-card hover:bg-muted/50'
                }`}>
                  <div className={`p-2 rounded-md ${link.primary ? 'bg-primary/10' : 'bg-muted'}`}>
                    <link.icon className={`w-4 h-4 ${link.primary ? 'text-primary' : 'text-foreground'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground">{link.title}</h4>
                    <p className="text-sm text-muted-foreground truncate">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
