import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PullQuote from "./PullQuote";

const BookSynopsis = () => {
  return (
    <section className="relative bg-background py-28">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Chapter I" title="The Book" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg" delay={80}>
            <p>
              Published in 1941,{" "}
              <em className="text-parchment">A Clamrose Mechanizmus</em> is
              regarded as Professor Gary Hun's most unusual and controversial
              academic work. Written during the height of his early research
              career, the book was originally published in a small academic
              edition and circulated primarily among universities and
              theoretical physicists.
            </p>
            <p>
              The book is notable for its exceptionally formal presentation
              and somewhat unusual terminology. Hun writes in a
              characteristically precise style, with long mathematical
              arguments, dense footnotes, and numerous diagrams. Several
              chapters begin with short quotations from earlier mathematicians
              and physicists, while the later sections contain extensive
              appendices and handwritten-style mathematical annotations.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <PullQuote
              quote="Now you understand the equation. The difficult part is understanding what it means."
              attribution="Attributed to Professor Hun"
              />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BookSynopsis;
