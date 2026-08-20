import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

const legacy = [
  {
    year: "1941",
    title: "A Sceptical Reception",
    description: "The small academic edition is received with some scepticism among its first theoretical-physics readers.",
  },
  {
    year: "Later years",
    title: "A Quiet Reputation",
    description: "The work gradually acquires a reputation within academic circles, discussed in low tones rather than in print.",
  },
  {
    year: "Increasingly rare",
    title: "Copies Grow Scarce",
    description: "Copies become increasingly difficult to obtain, particularly after Hun ceases discussing the book publicly.",
  },
  {
    year: "Present day",
    title: "An Early Investigation",
    description: "When questioned, Hun refers to it simply as \u201Can early investigation\u201D and quickly moves to another subject.",
  },
];

const LegacySection = () => {
  return (
    <section className="relative bg-card py-28">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Chapter IV" title="Reception & Legacy" />
        </Reveal>

        <Reveal delay={80}>
          <Timeline items={legacy} className="mx-auto max-w-2xl" />
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-14 max-w-2xl border-t border-border/60 pt-10 text-center">
          <p className="text-base italic leading-relaxed text-muted-foreground sm:text-lg">
            The title has consequently become closely associated with Hun's
            name, despite the fact that relatively little is known outside
            specialist academic circles about the circumstances surrounding
            its publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default LegacySection;
