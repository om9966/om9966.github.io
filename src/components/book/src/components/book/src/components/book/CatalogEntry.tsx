import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const fields: { label: string; value: string }[] = [
  { label: "Title", value: "A Clamrose Mechanizmus" },
  { label: "Author", value: "Professor Gary Hun" },
  { label: "First Edition", value: "1941" },
  { label: "Extent", value: "Approx. 280 pages" },
  { label: "Binding", value: "Dark cloth, embossed spine" },
  { label: "Ornamentation", value: "None beyond title lettering" },
  { label: "Later Editions", value: "Never widely produced" },
  { label: "Present Status", value: "Rare, uncommon in circulation" },
];

const CatalogEntry = () => {
  return (
    <section className="relative bg-card py-28">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Chapter II" title="The Physical Object" />
        </Reveal>

        <Reveal delay={80}>
          <div className="rule-frame cloth-texture mx-auto max-w-3xl px-6 py-10 shadow-elegant sm:px-12 sm:py-14">
            <p className="mb-8 font-accent text-sm uppercase tracking-[0.3em] text-primary/70">
              Catalog Entry
            </p>
            <dl className="grid gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.label} className="border-b border-border/60 pb-4">
                  <dt className="font-accent text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
                    {field.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-lg text-parchment">
                    {field.value}
                  </dd>
                </div>
              ))}
               </dl>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Its cover bears little decoration beyond the author's name and
              title, reflecting Hun's dislike of unnecessary ornamentation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CatalogEntry;
