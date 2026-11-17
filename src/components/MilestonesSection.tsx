import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

// A vertical timeline of the same projects shown in the Portfolio section.
// "Project details" uses the built-in HTML <details> element, so no JavaScript is needed.
export default function MilestonesSection() {
  return (
    <section id="milestones" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Project timeline" title="Project milestones" />

        <ol className="mt-12">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;
            return (
              <li
                key={project.id}
                id={project.id}
                className="relative border-b border-dashed border-line py-6 pl-14"
              >
                {/* The vertical line connecting the circles (not drawn below the last one) */}
                {!isLast && <span className="absolute bottom-0 left-[19px] top-10 w-px bg-primary/60" />}
                {/* The circle on the line */}
                <span className="absolute left-3 top-8 h-4 w-4 rounded-full border-[3px] border-primary bg-white" />

                <h3 className="text-xl font-bold text-ink">{project.title}</h3>
                <p className="mt-1 text-muted">{project.description}</p>

                <details className="group mt-3">
                  <summary className="cursor-pointer font-semibold text-primary">Project details</summary>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
