import { cn } from "@/lib/utils";

/**
 * Decorative, faint line-diagram motif evoking the book's dense
 * mathematical illustrations. Purely ornamental background texture.
 */
const DiagramMotif = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      className={cn("pointer-events-none select-none", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 6" />
      <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="400" cy="400" r="120" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 5" />
      <line x1="400" y1="40" x2="400" y2="760" stroke="currentColor" strokeWidth="0.5" />
      <line x1="40" y1="400" x2="760" y2="400" stroke="currentColor" strokeWidth="0.5" />
      <path d="M120 400 A280 280 0 0 1 400 120" stroke="currentColor" strokeWidth="0.8" />
      <path d="M680 400 A280 280 0 0 1 400 680" stroke="currentColor" strokeWidth="0.8" />
      <path d="M240 240 L560 560 M560 240 L240 560" stroke="currentColor" strokeWidth="0.4" />
      <text x="410" y="150" fontSize="13" fill="currentColor" fontFamily="serif">
        Ψ(x,t) = ∫ K(x,ξ)·φ(ξ) dξ
      </text>
      <text x="470" y="410" fontSize="13" fill="currentColor" fontFamily="serif">
        ∂²Ω/∂τ² + λΩ = 0
      </text>
    </svg>
  );
};

export default DiagramMotif;
