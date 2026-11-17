import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

// One font for the whole site. The "variable" name is used in globals.css.
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });

// Text shown in the browser tab and in search results.
export const metadata: Metadata = {
  title: `${profile.shortName} | ${profile.title}`,
  description: `${profile.fullName}: senior software engineer building AI-powered software, full-stack applications, and financial workflow automation.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} scroll-smooth`}>
      <body className="font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
