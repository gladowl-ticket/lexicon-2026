import React from "react";
import "./HeroDesktop.css";
import { NpfWidget } from "./npfWidget";

export const HeroMobile = () => {
  return (
    <div className="hero-mobile flex flex-col text-center min-h-screen gap-4">
      <img src="./hero/2.png" alt="Image Not Found" />
      <div className="px-2">
        <div className="border rounded-md">
          <NpfWidget />
        </div>
      </div>
    </div>
  );
};
