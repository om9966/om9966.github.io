const SiteFooter = () => {
  return (
    <footer className="relative border-t border-border/60 bg-gradient-ink py-14">
      <div className="container flex flex-col items-center gap-4 text-center">
        <span className="font-display text-lg emboss-gold">
          A Clamrose Mechanizmus
        </span>
        <span className="font-accent text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
          Archival Record · Professor Gary Hun · Est. MCMXLI
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
