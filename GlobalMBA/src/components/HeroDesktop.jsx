import React from "react";
import bgImage from "../assets/hero/hero-banner.png";
import "./HeroDesktop.css";
import { NpfWidget } from "./npfWidget";
import "./npfWidget"

export const HeroDesktop = () => {
  return (
    <div
      className="relative overflow-x-hidden hero-section flex py-20 px-8 text-center min-h-screen "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
     <div className = "flex relative z-10 w-full">
       <div className = "hero-section-text mx-auto text-white px-4 py-10 rounded-lg bg-[#f6b70073] backdrop-blur-sm">
           <h2>
            Where {" "}
            <span className = "highlighted-text">
                Management Education
                </span>{" "}
                
                 Meets Real Placements, Real Mentors, & Real Growth.

           </h2>
           <hr className = "hero-seperator" />
            <h4>
                Lexicon MBA| Admissions Open 2026-27


            </h4>
       </div>
       <div className = "npf-widget-container  w-full flex justify-end items-center px-4">
        <NpfWidget />
       </div>
     </div>
    </div>
  );
};
