import React from "react";
import { BsAwardFill, BsFillMortarboardFill, BsAirplaneFill, BsLightbulbFill, BsMicFill, BsTranslate, BsBuilding, BsShieldCheck, BsCompassFill } from "react-icons/bs";

const WhyChoose = () =>{
return(
<section>
    <div className="pb-12 max-w-8xl px-4 lg:px-20 ">
        <div className="flex justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4">Why MBA Global?</h2>
        </div>
        <div className="flex flex-wrap">

            <div className="w-full lg:w-1/2 lg:pe-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsAwardFill />
                    </span>
                    <p>Tried and tested UK-based MBA Global Program, inviting applications for the 8th batch.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsTranslate />
                    </span>
                    <p>Specialised training for UK-style English Language Communication and IELTS Training.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6  lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsAirplaneFill />
                    </span>
                    <p>As part of the program offering, the fee covers one-way international travel from India to the UK and the Student Tier 4 (normal) visa fees, providing added convenience and support for global mobility.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsBuilding />
                    </span>
                    <p>Deloitte, Tata, Sandvik, Arete, Jubilant, etc. are companies that have had their representatives address MBA Global Students.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsLightbulbFill />
                    </span>
                    <p>Business Clinics during Induction, Master Clinics for Placement-specific skill sets, and Start-up Clinics to promote entrepreneurship.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsShieldCheck />
                    </span>
                    <p>No Visa Rejection till date in 7 batches.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pe-6 mt-4">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsMicFill />
                    </span>
                    <p>Well-known dignitaries like Dr. Kiran Bedi, Shri Prahlad Kakkar, and Lord Karan Bilimoria have addressed the MBA Global Students.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-6 lg:mt-4 mt-2">
                <div className="border border-blue-950 h-full shadow p-3 flex gap-5 items-center">
                    <span className="bg-blue-950 text-white p-3 text-3xl ">
                        <BsCompassFill />
                    </span>
                    <p>Robust Pre-Joining Orientation. Medical Expenses are free under the National Health Service in the UK</p>
                </div>
            </div>
        </div>
    </div>

</section>
);
}

export default WhyChoose;