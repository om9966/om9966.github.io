import { cn } from "@/lib/utils";

export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <ol className={cn("relative border-l border-border/70 pl-8", className)}>
      {items.map((item, index) => (
        <li key={`${item.year}-${index}`} className={cn("relative pb-10", index === items.length - 1 && "pb-0")}>
          <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-primary shadow-gold-glow" />
          <span className="font-accent text-sm uppercase tracking-[0.3em] text-primary/80">
            {item.year}
          </span>
          <h3 className="mt-1 font-display text-lg text-parchment sm:text-xl">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
