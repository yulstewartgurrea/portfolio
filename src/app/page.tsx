import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import MilestonesSection from "@/components/MilestonesSection";
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
        <ExperienceSection />
        <ServicesSection />
        <PortfolioSection />
        <MilestonesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
