import React from "react";
import { BsBagDashFill, BsBuildingFillDown, BsFillGlobeAmericasFill, BsFillTrophyFill } from "react-icons/bs";

const PlacementSection = () => {
return (
<section>
  <div className="px-4 lg:px-20 pt-12" id="placements">
    <div className="flex flex-wrap">
      <div className="w-full flex flex-wrap items-center justify-center">
      <div className="w-full mb-4 lg:mb-0 lg:w-3/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsBagDashFill />
          </span>

          <div>
            <h3 className="text-4xl font-bold text-sky-500">500+</h3>
            <p className="text-sm text-white font-semibold">Placement Offers</p>
            <p className="text-xs text-gray-300">Every Academic Year</p>
          </div>

        </div>
      </div>
      <div className="w-full mb-4 lg:mb-0 lg:w-3/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsBuildingFillDown />
          </span>

          <div>
            <h3 className="text-4xl font-bold text-sky-500">200+</h3>
            <p className="text-sm text-white font-semibold">Companies Visit</p>
            <p className="text-xs text-gray-300">For recruitement annually</p>
          </div>

        </div>
      </div>
      <div className="w-full mb-4 lg:mb-0 lg:w-3/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsFillGlobeAmericasFill />
          </span>

          <div>
            <h3 className="text-4xl font-bold text-sky-500">49 LPA</h3>
            <p className="text-sm text-white font-semibold">Highest Intl. Package</p>
            <p className="text-xs text-gray-300">International placement record</p>
          </div>
        </div>
      </div>
      <div className="w-full mb-4 lg:mb-0 lg:w-3/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsFillTrophyFill />
          </span>

          <div>
            <h3 className="text-4xl font-bold text-sky-500">22 LPA</h3>
            <p className="text-sm text-white font-semibold">Highest National Package</p>
            <p className="text-xs text-gray-300">Domestic placement record</p>
          </div>

        </div>
      </div>
      </div>
    </div>
  </div>
</section>
);
};

export default PlacementSection;