import React, { useState } from "react";

const Recruiters = () => {
  const [showAll, setShowAll] = useState(false);

  const logos = Array.from({ length: 48 }, (_, i) => i + 1);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);

    document
      .getElementById("logoGrid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="" id="recruiters">
      <div className="py-12 container ">
        <div className="flex justify-center mb-8">
            <h2 className="text-4xl lg:text-5xl text-blue-950 font-bold">Our Recruiters</h2>
        </div>
        {/* Logo Grid */}
        <div
          id="logoGrid"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
        >
          {logos.map((logo, index) => {
            if (!showAll && index >= 12) return null;

            return (
              <div key={logo} className="logo-card p-2">
                <img
                  src={`/recruiter/${logo}.png`}
                  alt={`logo-${logo}`}
                  loading="lazy"
                  className="w-full p-2 bg-yellow-100 object-contain h-[100px] rounded-md"
                />
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="text-center mt-6">
          {!showAll && (
            <button
              onClick={handleViewMore}
              className="px-6 py-2 bg-blue-950 text-white rounded hover:bg-blue-900 transition"
            >
              View More
            </button>
          )}

          {showAll && (
            <button
              onClick={handleViewLess}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              View Less
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default Recruiters;