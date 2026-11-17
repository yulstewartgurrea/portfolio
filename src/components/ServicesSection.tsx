import { services } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ButtonLink from "./ButtonLink";
import { iconsByName } from "./Icons";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-soft pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="My services"
            title="What I can help you build"
            subtitle="From a focused automation to a complete web application."
            centered
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const ServiceIcon = iconsByName[service.icon];
            return (
              <div key={service.title} className="rounded-3xl border border-line bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <ServiceIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-ink">{service.title}</h3>
                <div className="mx-auto mt-4 h-0.5 w-10 bg-primary/40" />
                <p className="mt-4 text-sm text-muted">{service.tags.join(" · ")}</p>
                <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="#contact">Discuss a Project</ButtonLink>
        </div>
      </div>
    </section>
  );
}
