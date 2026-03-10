import React, { useEffect, useState } from "react";
import "./Placements.css";
import PlacemntImg1 from "../assets/placements/place01.png";
import PlacemntImg2 from "../assets/placements/place02.png";
import PlacemntImg3 from "../assets/placements/place03.png";
import PlacemntImg4 from "../assets/placements/place04.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [PlacemntImg1, PlacemntImg2, PlacemntImg3, PlacemntImg4];

export const Placements = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Fade-in observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in-visible");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Window resize handler
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const placementStats = [
    { number: "1.2 Cr.", text: "Highest Overseas" },
    { number: "4500+", text: "Placements" },
    { number: "60 Lac", text: "Highest Package" },
    { number: "350+", text: "Recruiters of IITs / IIMs / NITs" },
    { number: "18–20 LPA", text: "240 Placement offers" },
    { number: "6–10 LACS", text: "1800 Placement offers" },
    { number: "2000+", text: "Recruiters hiring NIMS students" },
    { number: "1000+", text: "Companies offering 10 LPA" },
  ];

  // Decide if we should use carousel
  const useCarousel = windowWidth <= 1182;

  // Decide grid columns for non-carousel
  const getGridColumns = () => {
  if (windowWidth >= 1280) return 4; // large
  if (windowWidth >= 1183) return 2; // medium
  return 1; 
  };

  return (
    <div className="placements-section">
      {/* Stats Section */}
      <div className="flex wrapper-placement justify-center mx-auto px-4 py-12">
        <div className="placements-text-container fade-in">
          <span className="placements-label">Career Success</span>
          <h2 className="placements-title mt-4">Record Breaking Placement 2025</h2>
          <p className="placements-desc mt-4">
            Our students consistently secure placements with leading organizations across industries.
            With strong industry partnerships, skill-focused training, and career mentorship, 
            NIMS University ensures graduates are job-ready and confident to succeed in a competitive global workforce.
          </p>
        </div>

        <div className="placements-grid fade-in">
          {placementStats.map((item, index) => {
            const highlight = item.number === "60 Lac" || item.number === "350+";
            return (
              <div
                key={index}
                className={`placement-card ${highlight ? "placement-card--highlight" : ""} fade-in`}
              >
                <h3 className="placement-number">{item.number}</h3>
                <p className="placement-text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Images Section */}
      {/* Images Section */}
<div className="mx-auto px-4 py-12 mt-4">
  {useCarousel ? (
    <Swiper
      spaceBetween={20}
      loop
      navigation
      modules={[Navigation]}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Placement ${index + 1}`}
            className="placement-image fade-in"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div
      className="grid wrapper-placement justify-center gap-6 fade-in"
      style={{
        flexWrap: "wrap",
        gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Placement ${index + 1}`}
          className="placement-image fade-in"
          style={{
            transitionDelay: `${index * 150}ms`,
            flex: `1 1 calc(${100 / getGridColumns()}% - 1rem)`,
          }}
        />
      ))}
    </div>
  )}
</div>
    </div>
  );
};