import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PullQuote from "./PullQuote";
import Timeline from "./Timeline";

const qualifications = [
  {
    year: "1927",
    title: "B.A. in Mathematics",
    description: "Royal Hungarian Pázmány Péter University.",
  },
  {
    year: "1930",
    title: "M.A. in Physics",
    description: "University of Vienna, amid the city's rapidly developing school of modern theoretical physics.",
  },
  {
    year: "1934",
    title: "Ph.D. in Theoretical Physics",
    description: "Harvard University — the foundation of his later research career.",
  },
];

const AuthorProfile = () => {
  return (
    <section className="relative bg-background py-28">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Chapter III" title="The Author" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg" delay={80}>
            <p>
              Professor Gary Hun is a Hungarian-American theoretical
              physicist and university lecturer whose academic career spans
              several decades. Quiet, exacting, and somewhat difficult to
              impress, he is remembered by students for demanding precision
              and expecting them to understand{" "}
              <em className="text-parchment">why</em> something is true
              rather than merely memorising the answer.
              </p>
            <p>
              Born in Hungary in the early twentieth century, Hun showed an
              early aptitude for mathematics, fascinated by problems that
              seemed simple on the surface but revealed increasingly
              complicated principles when examined closely. This fascination
              eventually carried him into theoretical physics and the
              attempt to describe the physical world through mathematical
              law.
            </p>
            <p>
              He rarely speaks unnecessarily, and his lectures are delivered
              in a calm, measured voice. Students sometimes find him
              intimidating at first — he has little patience for careless
              calculations or unsupported conclusions — yet those who take
              his courses seriously regard him as a fair and knowledgeable
              teacher.
            </p>
            
            <PullQuote
              quote="Elegant mathematics is meaningless if it cannot ultimately be reconciled with physical reality."
              attribution="On his own guiding principle"
              className="pt-2"
            />
          </Reveal>

          <Reveal delay={160}>
            <p className="mb-6 font-accent text-sm uppercase tracking-[0.3em] text-primary/70">
              Academic Qualifications
            </p>
            <Timeline items={qualifications} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AuthorProfile;
