import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-soft py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Experience" title={experience.title} subtitle={experience.description} />

        <div className="mt-6 flex flex-wrap gap-3">
          {experience.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
