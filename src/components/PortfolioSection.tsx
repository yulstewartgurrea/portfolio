"use client";
// "use client" is needed because the filter buttons use state.

import { useState } from "react";
import Image from "next/image";
import { experiences, projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./Icons";

// Build the filter list from the categories used in the data,
// e.g. ["All", "AI Engineering", "Financial Automation", "Web Development"].
const categories = ["All", ...new Set(projects.map((project) => project.category))];

// Every id used in the "Professional experience" timeline (jobs and their engagements).
// A card only shows "View project" when its id is in this list.
const timelineIds: string[] = [];
for (const job of experiences) {
  if (job.id) timelineIds.push(job.id);
  for (const engagement of job.engagements ?? []) {
    if (engagement.id) timelineIds.push(engagement.id);
  }
}

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    // The id stays "portfolio" so the "Portfolio" link in the navigation still works.
    <section id="portfolio" className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Portfolio"
          subtitle="Applications and systems I’ve built across AI, backend engineering, and web development."
          centered
        />

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2 transition ${
                selectedCategory === category
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-white text-ink hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            // Number based on the project's position in the full list: "01", "02", ...
            const number = String(projects.indexOf(project) + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Screenshot or diagram: only shown when the project has an image.
                    Confidential projects stay as compact text-only cards. */}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={750}
                    className="aspect-[16/10] w-full border-b border-line object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {number} · {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Jumps to the entry with the same id in the "Professional experience" timeline */}
                  {timelineIds.includes(project.id) && (
                    <a
                      href={`#${project.id}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      View project
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
