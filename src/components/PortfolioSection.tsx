"use client";
// "use client" is needed because the filter buttons use state.

import { useState } from "react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, iconsByName } from "./Icons";

// Build the filter list from the categories used in the data,
// e.g. ["All", "AI Engineering", "Financial Automation", "Web Development"].
const categories = ["All", ...new Set(projects.map((project) => project.category))];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          subtitle="A look at my work in AI, financial automation, and web development."
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
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            const ProjectIcon = iconsByName[project.icon];

            // Number based on the project's position in the full list: "01", "02", ...
            const number = String(projects.indexOf(project) + 1).padStart(2, "0");

            return (
              <article key={project.id} className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
                {/* Top: light blue area with rings pattern and the icon */}
                <div className="rings-pattern relative flex h-44 items-center justify-center border-b border-line bg-primary-soft">
                  <p className="absolute left-5 top-4 text-xs font-bold uppercase tracking-widest text-primary">
                    {number} / Project
                  </p>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <ProjectIcon className="h-8 w-8" />
                  </div>
                </div>

                {/* Bottom: text */}
                <div className="p-6">
                  <p className="text-sm text-muted">{project.tags.join(" · ")}</p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-2 text-muted">{project.description}</p>

                  {/* Jumps to this project's entry in the "Project milestones" timeline */}
                  <a
                    href={`#${project.id}`}
                    className="mt-4 inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    View project
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
