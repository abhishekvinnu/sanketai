import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-hero">
            <img
              src="/logo.png"
              alt="SanketAI"
              className="w-10 h-10 rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              SanketAI
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
