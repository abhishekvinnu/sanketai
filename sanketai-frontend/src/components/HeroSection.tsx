import { useState } from 'react';
import { Search, Shield, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onVerify: (text: string) => void;
  isLoading: boolean;
}

export function HeroSection({ onVerify, isLoading }: HeroSectionProps) {
  const [newsText, setNewsText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsText.trim()) {
      onVerify(newsText);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-success/5" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/40 via-primary/50 to-primary/50 rounded-full blur-[100px] opacity-70 animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-gradient-to-tl from-success/50 via-success/50 to-success/50 rounded-full blur-[100px] opacity-70 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/50 via-transparent to-success/50 rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              AI-Powered Fake News Detection
            </span>
          </div>


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Verify News Credibility
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-success bg-clip-text text-transparent">
              in Real Time
            </span>
          </h1>


          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            Combat misinformation with AI-powered fake news detection. Get instant credibility analysis and responsible guidance.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            <div className="relative group">
 
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-success/40 to-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-elevated p-6 md:p-8">
                <Textarea
                  placeholder="Paste the news article or claim you want to verify..."
                  value={newsText}
                  onChange={(e) => setNewsText(e.target.value)}
                  className="min-h-[140px] text-base resize-none border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 transition-all duration-300 rounded-xl"
                />

                <Button
                  type="submit"
                  size="xl"
                  className="w-full mt-5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  disabled={!newsText.trim() || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Verify News
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-success to-success/70 shadow-sm" />
              <span className="font-medium">AI-Powered Text Classification </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm" />
              <span className="font-medium">Contextual & Linguistic Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-warning to-warning/70 shadow-sm" />
              <span className="font-medium">Real-Time Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
