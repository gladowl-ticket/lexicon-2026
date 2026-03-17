import React from "react";
import { SiteNavbar } from "../components/Navbar";
import Hero from "../components/Hero";
import ProgramsSection from "../components/ProgramsSection";
import About from "../components/About/About";
import Awards from "../components/Awards/Awards";
import BackToTop from "../components/Footer/BackToTop";
import Footer from '../components/Footer/Footer';
import Recruiters from "../components/Recruiters/Recruiters";
import AdmissionProcess from "../components/AdmissionProcess/AdmissionProcess";
import CampusLife from "../components/CampusLife/CampusLife";
import Testimonials from "../components/Testimonials/Testimonials";
import PlacementSection from "../components/PlacementSection/PlacementSection";
import Programs from "../components/Programs/Programs";
import CTASection from "../components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
    <SiteNavbar />
      <Hero />
      <PlacementSection />
      <About />
      <Awards />
      <Programs/>
      <ProgramsSection />
      <Recruiters />
      <AdmissionProcess />
      <CampusLife/>
      <Testimonials/>
      <CTASection />
      <BackToTop/>
      <Footer/>
    </div>
  );
};

export default Index;
