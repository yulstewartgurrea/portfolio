import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// The whole website is one page. Sections appear in this order, top to bottom.
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfessionalExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
