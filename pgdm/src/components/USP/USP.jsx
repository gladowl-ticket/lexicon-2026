import React from "react";
import { BsAwardFill, BsFillMortarboardFill, BsAirplaneFill, BsLightbulbFill, BsMicFill, BsTranslate, BsBuilding, BsShieldCheck, BsCompassFill } from "react-icons/bs";
import { FaGlobeAsia, FaRobot, FaBriefcase, FaRocket, FaGamepad, FaCalendarAlt, FaChalkboardTeacher, FaUserCheck, FaCertificate, FaNetworkWired, FaClock } from "react-icons/fa";

const USP = () =>{
return(
<section>
    <div className="pt-4 lg:pt-12 max-w-8xl px-4 lg:px-20 ">
        <div className="flex justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4">The Lexicon Edge</h2>
        </div>
        <div className="flex flex-wrap">

            <div className="w-full lg:w-1/2 lg:pe-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaGlobeAsia />
                    </span>
                    <p>International exposure through the <span className="font-bold">Global Immersion Program</span> in <span className="font-bold">Malaysia</span>
                (Year 1) and <span className="font-bold">Dubai</span> (Year 2)</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaRobot />
                    </span>
                    <p>India’s most structured <span className="font-bold">AI-integrated PGDM</span> with <span className="font-bold">Hyper Build – The Lexicon MILE AI Lab</span> </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6  lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaBriefcase />
                    </span>
                    <p><span className="font-bold">120-day Corporate Immersion Project</span> (CIP) with real business problem-solving
                and industry exposure</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaRocket />
                    </span>
                    <p><span className="font-bold">Degree + Business Launch</span> opportunity</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaGamepad />
                    </span>
                    <p><span className="font-bold">Simulation-based learning </span>
                 through FailLab for resilience and decision-making skills</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaCalendarAlt />
                    </span>
                    <p><span className="font-bold">Corporate Saturdays — Second to None</span> Leadership Conclaves | Panel Discussions | Corporate Talk Series |
                Domain Mastery Workshops</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6 mt-4">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaChalkboardTeacher />
                    </span>
                    <p><span className="font-bold">Placement Mentorship & Career Readiness Support CV Building | LinkedIn Optimisation | Mock Interviews |
                AI-Driven Interview Preparation</span></p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaUserCheck />
                    </span>
                    <p><span className="font-bold">Employment-Enhancing Certifications</span> Data Analytics | AI & Digital Marketing | Financial Modelling |
                Power BI | Python/R | Six Sigma | Talent Acquisition | Business Communication.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaNetworkWired />
                    </span>
                    <p>Strong returning recruiter network and <span className="font-bold">multiple placement opportunities.</span></p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <FaClock />
                    </span>
                    <p><span className="font-bold">Daily 5-hour applied AI immersion</span> integrated with core management learning for business-focused
                execution.</p>
                </div>
            </div>
        </div>
    </div>
    

</section>
);
}

export default USP;