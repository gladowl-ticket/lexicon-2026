import React from "react";
import { SiteNavbar } from "../components/Navbar";
import Hero from "../components/Hero";
import {Placements} from "../components/Placements"

const Index = () => {
  return (
    <div className="min-h-screen">
  <SiteNavbar />
    <Hero />
    <Placements />
    </div>
  );
};

export default Index;
