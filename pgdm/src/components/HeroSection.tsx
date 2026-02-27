import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroCampus from "@/assets/hero-campus.jpg";
import { ArrowRight, ChevronRight, Play, CheckCircle2, Star, Building2, MapPin, Phone, Mail, FileText, Download, Briefcase, Zap, GraduationCap, Globe, Menu, X } from "lucide-react";
import HeroFormWidget from "@/components/HeroFormWidget";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'placements', 'programs', 'admission-process', 'partners'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();

    // Slight delay ensures the mobile menu closing animation/state update doesn't interrupt the scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80; // Approximate fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F9F2E2] shadow-sm px-6 py-4 border-b border-navy/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-3 md:pl-4 lg:pl-8 xl:pl-10">
          <a href="/" className="inline-block py-1">
            <img
              src="https://lexiconmile.com/wp-content/uploads/2020/03/black_Logo.svg"
              alt="Lexicon MILE Logo"
              style={{ width: 'auto', height: '50px', maxWidth: '180px' }}
              className="object-contain transition-all"
            />
          </a>
        </div>

        {/* Desktop Contact Area */}
        <div className="hidden md:flex items-center justify-between flex-1 ml-12 lg:ml-24 max-w-3xl">
          <div className="flex items-center gap-3">
            <a 
              className={`px-1 transition-colors ${activeSection === 'about' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
            > 
              About Us 
            </a>
            <a 
              className={`px-1 transition-colors ${activeSection === 'placements' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
              href="#placements" 
              onClick={(e) => scrollToSection(e, 'placements')}
            > 
              Placements 
            </a>
            <a 
              className={`px-1 transition-colors ${activeSection === 'programs' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
              href="#programs" 
              onClick={(e) => scrollToSection(e, 'programs')}
            > 
              Programs 
            </a>
            <a 
              className={`px-1 transition-colors ${activeSection === 'admission-process' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
              href="#admission-process" 
              onClick={(e) => scrollToSection(e, 'admission-process')}
            > 
              Admission Process 
            </a>
            <a 
              className={`px-1 transition-colors ${activeSection === 'partners' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
              href="#partners" 
              onClick={(e) => scrollToSection(e, 'partners')}
            > 
              Partners 
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEnquireModal"))}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#002244] text-white font-normal uppercase tracking-wider sm:tracking-[0.2em] text-xs transition-all shadow-md group border border-[#003B64] w-full sm:w-auto"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          </div>
         
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-navy hover:bg-navy/5 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 space-y-1">
              <a 
                className={`py-1 my-1 transition-colors ${activeSection === 'about' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
              > 
                About Us 
              </a>
              <a 
                className={`py-1 my-1 transition-colors ${activeSection === 'placements' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
                href="#placements"
                onClick={(e) => scrollToSection(e, 'placements')}
              > 
                Placements 
              </a>
              <a 
                className={`py-1 my-1 transition-colors ${activeSection === 'programs' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
                href="#programs"
                onClick={(e) => scrollToSection(e, 'programs')}
              > 
                Programs 
              </a>
              <a 
                className={`py-1 my-1 transition-colors ${activeSection === 'admission-process' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
                href="#admission-process"
                onClick={(e) => scrollToSection(e, 'admission-process')}
              > 
                Admission Process 
              </a>
              <a 
                className={`py-1 my-1 transition-colors ${activeSection === 'partners' ? 'text-[#004E7E] font-semibold' : 'text-black hover:text-[#004E7E]'}`} 
                href="#partners"
                onClick={(e) => scrollToSection(e, 'partners')}
              > 
                Partners 
              </a>
              
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    closeMenu();
                    window.dispatchEvent(new CustomEvent('openEnquireModal'));
                  }}
                  className="w-full px-5 py-3 rounded-lg bg-[#004E7E] text-white text-sm font-semibold hover:brightness-110 transition-all flex justify-center"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen bg-hero overflow-hidden flex items-center mt-20 md:mt-0">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img src="https://lexiconmile.com/wp-content/uploads/2025/11/5-Outside-View.jpg" alt="Lexicon MILE Campus" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/80" />
    </div>

    {/* Decorative elements */}
    <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-[#004E7E]/5 blur-3xl" />
    <div className="absolute bottom-10 -left-10 sm:bottom-20 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-[#004E7E]/3 blur-3xl" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-[#004E7E] animate-pulse" />
          <span className="text-sm text-primary-foreground/80 font-medium">Admissions Open 2026-28 Batch</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
          India's First PGDM Where <br />
          <span className="text-[#00A3E0]">AI Is Practiced Daily</span><br />
          Not Taught Occasionally
        </h1>

        <p className="text-lg text-primary-foreground/60 max-w-lg mb-10 font-body leading-relaxed">
          Transforming business education since 2009. AICTE-approved PGDM & MBA Global programs with 97.5% placement record and 200+ recruiting partners.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#004E7E] text-white font-light uppercase tracking-wider sm:tracking-[0.2em] text-xs sm:text-sm hover:brightness-110 transition-all shadow-md group border border-[#003B64] w-full sm:w-auto"
          >
            Start Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('programs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FFD700] text-black font-light uppercase tracking-wider sm:tracking-[0.2em] text-xs sm:text-sm hover:brightness-105 transition-all shadow-lg w-full sm:w-auto"
          >
            Explore Programs
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-8 sm:mt-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <GraduationCap className="w-5 h-5 text-[#004E7E]" />
            <span className="text-white/80 font-medium text-sm sm:text-base">9/12 Certifications</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-3 rounded-2xl border border-white/10">
            <Globe className="w-5 h-5 text-[#004E7E]" />
            <span className="text-xs sm:text-sm text-primary-foreground/60">UK Partnership</span>
          </div>
        </div>
      </motion.div>

      {/* Admission Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        id="apply"
        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[420px] mx-auto lg:ml-auto lg:mx-0"
      >
        {/* Card Header */}
        <div className="bg-navy px-6 py-5 border-b border-white/10">
          <h3 className="font-display text-2xl font-bold text-primary-foreground text-center">Admissions Open 2026</h3>
        </div>

        {/* NPF Widget iframe - exact form with login/register tabs */}
        <div className="bg-white p-4 pb-1 md:p-6 md:pb-1">
          <HeroFormWidget />
        </div>
      </motion.div>
    </div>
  </section>
);

export { Navbar, HeroSection };
