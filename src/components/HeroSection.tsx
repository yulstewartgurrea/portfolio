import Image from "next/image";
import { hero, profile } from "@/data/portfolio";
import ButtonLink from "./ButtonLink";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white to-primary-soft">
      {/* Decorative soft circles in the background */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-[700px] w-[700px] rounded-full border-[40px] border-primary/5" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[900px] w-[900px] rounded-full border-[30px] border-primary/5" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr]">
        {/* Left: text */}
        <div>
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {profile.fullName}
          </p>

          {/* Font sizes step down on phones and mid-size laptops so "Software Engineer" fits on one line */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl">
            {hero.headline}{" "}
            <span className="text-primary">{hero.highlightedWord}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{hero.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#portfolio">View Portfolio</ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Get in Touch
            </ButtonLink>
          </div>

          {/* "AI Engineering • Full-Stack Development • Automation" */}
          <p className="mt-8 text-sm font-semibold text-muted">{hero.focusAreas.join("  •  ")}</p>
        </div>

        {/* Right: round photo with a soft ring and a badge */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-full border border-primary/30 bg-primary-soft p-5">
            <Image
              src={profile.photo}
              alt={profile.fullName}
              width={500}
              height={500}
              priority
              className="aspect-square w-full rounded-full bg-white object-cover"
            />
          </div>
          <p className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink shadow-md">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {profile.title}
          </p>
        </div>
      </div>
    </section>
  );
}
