import { Shield, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 mt-auto">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-hero">
              <img
                src="/logo.png"
                alt="SanketAI"
                className="w-15 h-18 rounded-sm"
              />
            </div>
            <span className="font-semibold text-foreground">SanketAI</span>
          </div>
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This platform provides AI-based analysis and guidance for
              informational purposes only. Results are indicative and should not
              replace official fact-checking services or legal advice. Always
              verify information through multiple trusted sources.
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for digital citizens</span>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 SanketAI | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
