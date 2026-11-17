// The section title + optional small blue label above it + optional subtitle below it.

type SectionHeadingProps = {
  eyebrow?: string; // Optional small blue uppercase label, e.g. "CAREER TIMELINE"
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
