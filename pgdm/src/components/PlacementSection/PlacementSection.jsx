import React from "react";
import { BsBagDashFill } from "react-icons/bs";

const PlacementSection = () => {
return (
<section>
  <div className="px-4 lg:px-20 pt-12 pb-6" id="placements">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-7/12 flex flex-col items-start mb-8 lg:mb-0 lg:pe-10">
        {/* <p className="px-4 py-1 bg-yellow-500 text-white text-sm mb-4">Career Success</p> */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-blue-950">
          The Lexicon Edge
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pe-2 lg:border-e-blue-950 lg:border-e lg:border-dashed">
            <ul className="list-disc ps-6 lg:py-2">
              <li className="text-md  mb-1">International exposure through the <span className="font-bold">Global Immersion Program</span> in <span className="font-bold">Malaysia</span>
                (Year 1) and <span className="font-bold">Dubai</span> (Year 2)</li>
              <li className="text-md  mb-1">
                India’s most structured <span className="font-bold">AI-integrated PGDM</span> with <span className="font-bold">Hyper Build – The Lexicon MILE AI Lab</span> 
              </li>
              <li className="text-md  mb-1"><span className="font-bold">120-day Corporate Immersion Project</span> (CIP) with real business problem-solving
                and industry exposure</li>
              <li className="text-md  mb-1">
                <span className="font-bold">Degree + Business Launch</span> opportunity
              </li>
              <li className="text-md  mb-1">
                <span className="font-bold">Simulation-based learning </span>
                 through FailLab for resilience and decision-making skills
              </li>
              <li className="text-md  mb-1">
                <span className="font-bold">Corporate Saturdays — Second to None</span> Leadership Conclaves | Panel Discussions | Corporate Talk Series |
                Domain Mastery Workshops
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:ps-2">
            <ul className="list-disc ps-6 lg:py-2">
              <li className="text-md  mb-1">
                <span className="font-bold">Placement Mentorship & Career Readiness Support CV Building | LinkedIn Optimisation | Mock Interviews |
                AI-Driven Interview Preparation</span>
              </li>
              <li className="text-md  mb-1">
                <span className="font-bold">Employment-Enhancing Certifications</span> Data Analytics | AI & Digital Marketing | Financial Modelling |
                Power BI | Python/R | Six Sigma | Talent Acquisition | Business Communication.
              </li>
              <li className="text-md  mb-1">
                Strong returning recruiter network and multiple placement opportunities.
              </li>
              <li className="text-md  mb-1">
                Daily 5-hour applied AI immersion integrated with core management learning for business-focused
                execution.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12 flex flex-wrap items-center justify-center">
      <div className="w-full mb-4 lg:mb-0 lg:w-6/12 px-2">
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
      <div className="w-full mb-4 lg:mb-0 lg:w-6/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsBagDashFill />
          </span>

          <div>
            <h3 className="text-4xl font-bold text-sky-500">200+</h3>
            <p className="text-sm text-white font-semibold">Companies Visit</p>
            <p className="text-xs text-gray-300">For recruitement annually</p>
          </div>

        </div>
      </div>
      <div className="w-full mb-4 lg:mb-0 lg:w-6/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsBagDashFill />
          </span>

          <div>
            <h3 className="text-4xl font-bold text-sky-500">49 LPA</h3>
            <p className="text-sm text-white font-semibold">Highest Intl. Package</p>
            <p className="text-xs text-gray-300">International placement record</p>
          </div>
        </div>
      </div>
      <div className="w-full mb-4 lg:mb-0 lg:w-6/12 px-2">
        <div className="px-4 py-4 bg-blue-950 text-white rounded-md flex gap-6 items-center border-l-4 border-sky-500 shadow-lg">
          <span className="text-2xl border border-sky-800 bg-blue-900 text-sky-500 rounded-lg p-2">
            <BsBagDashFill />
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
    <div className="">
      <img src="./placement/1.png" className="w-full hidden lg:block" alt="" />
      <img src="./placement/2.png" className="w-full lg:hidden" alt="" />
    </div>
  </div>
</section>
);
};

export default PlacementSection;