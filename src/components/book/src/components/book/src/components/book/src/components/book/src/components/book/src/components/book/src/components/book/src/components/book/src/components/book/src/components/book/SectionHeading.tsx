import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, align = "left", className }: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <div className={cn("mb-12 flex flex-col", isCenter && "items-center text-center", className)}>
      <span className="mb-3 font-accent text-sm uppercase tracking-[0.35em] text-primary/80">
        {eyebrow}
      </span>
      <div className={cn("flex items-center gap-4", isCenter && "justify-center")}>
        {isCenter && <span className="h-px w-10 bg-border" />}
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        {isCenter && <span className="h-px w-10 bg-border" />}
      </div>
    </div>
  );
};

export default SectionHeading;
