import React from "react";
// import bgImage from "../assets/hero/hero-banner.png";
import "./HeroDesktop.css";
import { NpfWidget } from "./npfWidget";
import "./npfWidget"

export const HeroDesktop = () => {
  return (
    <section>
      <div class="relative w-full hidden lg:block">
        <img src="./hero/1.png" alt="" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-10">
          <div class="w-4/12">
            <h2 className = "font-bold text-white bg-blue-950 text-center px-4 lg:py-4 py-2 w-full">
              Admission Enquiry Form
            </h2>
            <NpfWidget />
          </div>
        </div>
      </div>
    </section>
  );
};
