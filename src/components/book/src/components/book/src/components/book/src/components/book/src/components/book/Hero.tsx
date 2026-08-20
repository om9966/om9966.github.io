import BookCover from "./BookCover";
import DiagramMotif from "./DiagramMotif";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-ink">
      <DiagramMotif className="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 text-primary/[0.06] animate-drift sm:-right-20" />
      <div className="absolute inset-0 bg-gradient-vignette" />
      <div className="grain-overlay absolute inset-0" />

      <div className="container relative grid gap-16 py-32 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col items-start text-left">
          <span className="mb-6 font-accent text-sm uppercase tracking-[0.4em] text-primary/80">
            An Archival Record
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-6xl">
            A Clamrose
            <br />
            <span className="emboss-gold">Mechanizmus</span>
          </h1>
          <p className="mt-6 font-accent text-lg text-muted-foreground sm:text-xl">
            Professor Gary Hun · 1941
          </p>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            The most unusual and controversial work of a reluctant scholar —
            a dense, formal treatise that has grown quietly rare in the
            decades since its first, sceptical reception.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-16 bg-border" />
            <span className="font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
              Scroll to read the record
            </span>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <BookCover />
        </div>
      </div>
    </section>
  );
};

export default Hero;
