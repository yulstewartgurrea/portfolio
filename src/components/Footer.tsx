import { profile } from "@/data/portfolio";
import { ArrowUpIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm sm:flex-row">
        <p className="text-muted">
          {profile.shortName} · {profile.title}
        </p>
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          {profile.email}
        </a>
        <a href="#home" className="inline-flex items-center gap-1 text-primary hover:underline">
          Back to top
          <ArrowUpIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
