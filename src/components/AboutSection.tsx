import Image from "next/image";
import { about, profile } from "@/data/portfolio";
import ButtonLink from "./ButtonLink";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: photo in a card */}
        <div className="rounded-3xl border border-line bg-white p-5 shadow-xl shadow-primary/5">
          <Image
            src={profile.photo}
            alt={profile.fullName}
            width={600}
            height={600}
            className="aspect-square w-full rounded-2xl object-cover"
          />
        </div>

        {/* Right: text */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">About me</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Hi there, I&apos;m <span className="text-primary">{profile.shortName}.</span>
          </h2>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-ink">
            {profile.title} · {profile.location}
          </p>

          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#professional-experience">View Experience</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              View Projects
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
