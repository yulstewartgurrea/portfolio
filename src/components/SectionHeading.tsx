// The small blue label + big title + optional subtitle used at the top of each section.

type SectionHeadingProps = {
  eyebrow: string; // Small blue uppercase label, e.g. "PORTFOLIO"
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
