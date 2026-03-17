import { Navbar, HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import CertificationsSection from "@/components/CertificationsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingActions />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <StatsSection />
      <CoursesSection />
      <CertificationsSection />
      <AdmissionProcess />
      <PartnersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
