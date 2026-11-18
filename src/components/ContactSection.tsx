import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, MailIcon, MapPinIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s get in touch"
          subtitle="Have a role or project in mind? I’d like to hear about it."
          centered
        />

        {/* Contact details */}
        <div className="mt-14 grid gap-10 text-center sm:grid-cols-3">
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
              <MailIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink">Email</h3>
            <a href={`mailto:${profile.email}`} className="mt-2 block text-primary hover:underline">
              {profile.email}
            </a>
          </div>

          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
              <GitHubIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink">GitHub</h3>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-primary hover:underline"
            >
              {profile.githubHandle}
            </a>
          </div>

          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
              <MapPinIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink">Location</h3>
            <p className="mt-2 text-muted">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
