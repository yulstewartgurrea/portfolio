"use client";
// "use client" is needed because the form handles a submit event in the browser.

import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GitHubIcon, MailIcon, MapPinIcon } from "./Icons";

export default function ContactSection() {
  // Opens the visitor's email app with a pre-filled draft. Nothing is sent automatically.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name"));
    const email = String(form.get("email"));
    const message = String(form.get("message"));

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\nFrom: ${name} (${email})`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-line bg-soft px-4 py-3 text-ink outline-none focus:border-primary";

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

        {/* Message form */}
        <h3 className="mt-20 text-3xl font-bold text-ink">Write a message</h3>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block font-semibold text-ink">
              Full name
              <input name="name" type="text" required className={inputClasses} />
            </label>
            <label className="block font-semibold text-ink">
              Email address
              <input name="email" type="email" required className={inputClasses} />
            </label>
          </div>

          <label className="mt-4 block font-semibold text-ink">
            Message
            <textarea name="message" rows={5} required className={inputClasses} />
          </label>

          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Open in Email App
            <ArrowUpRightIcon className="h-4 w-4" />
          </button>
          <p className="mt-3 text-sm text-muted">This opens a draft in your email app. Nothing is sent automatically.</p>
        </form>
      </div>
    </section>
  );
}
