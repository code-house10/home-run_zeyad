import { Phone } from "lucide-react";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ScrollingTicker from "@/components/sections/scrolling-ticker";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import QuoteFormSection from "@/components/sections/quote-form";
import WorkProcess from "@/components/sections/work-process";
import ProjectShowcase from "@/components/sections/projects";
import TeamSection from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import BlogSection from "@/components/sections/blog";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollingTicker />
      <AboutSection />
      <ServicesSection />
      <QuoteFormSection />
      <WorkProcess />
      <ProjectShowcase />
      <TeamSection />
      <Testimonials />
      <BlogSection />
      <Footer />

      {/* Floating Call Button */}
      <a
        href="tel:+201036591401"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-[#e85a3c] text-white rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-110 animate-bounce"
        aria-label="اتصل بنا الآن"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
