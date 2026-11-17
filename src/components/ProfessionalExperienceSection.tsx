import { earlierExperiences, experiences, type Job } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

// The full work history from the resume, shown as a vertical timeline.
export default function ProfessionalExperienceSection() {
  return (
    <section id="professional-experience" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Career timeline" title="Professional experience" />
        <Timeline jobs={experiences} />

        <h3 className="mt-20 text-2xl font-bold text-ink">Earlier software engineering experience</h3>
        <Timeline jobs={earlierExperiences} />
      </div>
    </section>
  );
}

// The blue vertical line is the left border of the list. Each job gets a circle on that line.
function Timeline({ jobs }: { jobs: Job[] }) {
  return (
    <ol className="ml-2 mt-10 border-l-2 border-primary/30">
      {jobs.map((job) => (
        <li key={`${job.role}-${job.company}`} id={job.id} className="relative pb-14 pl-10 last:pb-0">
          <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-[3px] border-primary bg-white" />
          <JobEntry job={job} />
        </li>
      ))}
    </ol>
  );
}

// One job. Optional fields (period, note, stack, ...) are only shown when they exist in the data.
function JobEntry({ job }: { job: Job }) {
  // e.g. "May 2022 - Present · Philippines"
  const periodAndLocation = [job.period, job.location].filter(Boolean).join(" · ");

  return (
    <div>
      <h4 className="text-xl font-bold text-ink">{job.role}</h4>
      <p className="mt-1 font-semibold text-primary">
        {job.company}
        {job.companyNote && <span className="font-normal text-muted"> | {job.companyNote}</span>}
      </p>
      {periodAndLocation && <p className="mt-1 text-sm font-medium text-muted">{periodAndLocation}</p>}
      {job.note && <p className="mt-3 text-sm italic text-muted">{job.note}</p>}
      {job.stack && (
        <p className="mt-3 text-sm text-muted">
          <strong className="text-ink">Stack:</strong> {job.stack}
        </p>
      )}

      {job.highlights && (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
          {job.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      {/* Client projects inside this job (e.g. the SGV engagements) */}
      {job.engagements && (
        <div className="mt-6 space-y-5">
          {job.engagements.map((engagement) => (
            <div key={engagement.name} id={engagement.id} className="rounded-2xl border border-line bg-soft p-5">
              <h5 className="font-bold text-ink">{engagement.name}</h5>
              <p className="mt-1 text-sm font-medium text-primary">
                {engagement.role}
                {engagement.period && ` | ${engagement.period}`}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                {engagement.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
