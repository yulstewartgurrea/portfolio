// A rounded link styled as a button, with the small ↗ arrow.
// "primary" = solid blue, "outline" = white with a border.

import { ArrowUpRightIcon } from "./Icons";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const colors =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "border border-line bg-white text-ink hover:border-primary hover:text-primary";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${colors}`}
    >
      {children}
      <ArrowUpRightIcon className="h-4 w-4" />
    </a>
  );
}
