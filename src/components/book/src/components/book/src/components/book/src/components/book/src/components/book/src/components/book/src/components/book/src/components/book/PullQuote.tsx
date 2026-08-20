import { cn } from "@/lib/utils";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

const PullQuote = ({ quote, attribution, className }: PullQuoteProps) => {
  return (
    <blockquote className={cn("relative border-l border-primary/40 pl-6 sm:pl-8", className)}>
      <p className="font-display text-xl italic leading-relaxed text-parchment sm:text-2xl">
        “{quote}”
      </p>
      {attribution && (
        <footer className="mt-3 font-accent text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {attribution}
        </footer>
      )}
    </blockquote>
  );
};

export default PullQuote;
