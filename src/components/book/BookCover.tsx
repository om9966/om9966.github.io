/**
 * A pure-CSS rendering of the 1941 cloth-bound first edition:
 * dark cloth cover, embossed title, no ornamentation beyond
 * a thin rule frame — matching Hun's dislike of decoration.
 */
const BookCover = () => {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] shadow-elegant">
      {/* spine shadow */}
      <div className="absolute -left-2 top-2 bottom-2 w-2 rounded-l-sm bg-black/50 blur-[2px]" />

      <div className="cloth-texture rule-frame relative flex h-full w-full flex-col items-center justify-between rounded-[2px] px-6 py-10 shadow-emboss">
        <span className="font-accent text-[11px] uppercase tracking-[0.4em] text-muted-foreground/70">
          Professor Gary Hun
        </span>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <span className="emboss-gold font-display text-2xl font-semibold leading-tight sm:text-3xl">
            A Clamrose
            <br />
            Mechanizmus
          </span>
          <span className="h-px w-16 bg-primary/40" />
        </div>

        <span className="font-accent text-xs tracking-[0.3em] text-muted-foreground/70">
          MCMXLI
        </span>
      </div>
    </div>
  );
};

export default BookCover;
