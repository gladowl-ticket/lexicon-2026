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
          <a href="/" className="flex py-1">
            <img
              src="./logo/logo_01.png"
              alt="Lexicon MILE Logo"
              className="object-contain transition-all max-w-[130px] lg:max-w-[120px] xl:max-w-[180px]"
            />
            <img
              src="./logo/logo_02.png"
              alt="Lexicon MILE Logo"
              className="object-contain transition-all max-w-[130px] lg:max-w-[120px] xl:max-w-[180px]"
            />
          </a>
        </div>

        {/* Desktop Contact Area */}
        <div className="hidden md:flex items-center justify-between flex-1 ml-12 lg:ml-4 max-w-3xl">
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
  <>
  <section className="relative bg-hero overflow-hidden flex items-center mt-20">
    <img src="./hero/1.png" className="w-full h-auto object-cover hidden md:block" alt="" />
    <img src="./hero/2.jpg" className="w-full h-auto object-cover md:hidden" alt="" />

    <div className="w-full absolute top-0 left-0 z-10 h-full items-center hidden md:flex">
      <div className="w-full lg:w-7/12">
      </div>
      <div className="w-full lg:w-5/12 2xl:w-4/12 lg:pe-10 2xl:pe-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          id="apply"
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[420px] mx-auto lg:ml-auto lg:mx-0 hidden md:block"
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
      <div className="w-0 2xl:w-1/12">
      </div>
    </div>

    
  </section>
  {/* Admission Form For Mobile */}
  <section className="md:hidden px-2 pb-14">
    {/* Admission Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        id="apply"
        className="mt-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[420px] mx-auto lg:ml-auto lg:mx-0"
      >
        {/* Card Header */}
        <div className="bg-navy px-6 py-5 border-b border-white/10">
          <h3 className="font-display text-2xl font-bold text-primary-foreground text-center">Admissions Open 2026</h3>
        </div>

        {/* NPF Widget iframe - exact form with login/register tabs */}
        <div className="bg-white p-4 pb-1 md:p-6 md:pb-1  h-[520px]">
          <HeroFormWidget />
        </div>
      </motion.div>
  </section>
  </>
);

export { Navbar, HeroSection };
