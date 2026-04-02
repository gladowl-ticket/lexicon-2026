import React from "react";
import { FaGlobeAsia, FaRobot, FaBriefcase, FaRocket, FaGamepad, FaCalendarAlt, FaChalkboardTeacher, FaUserCheck, FaCertificate, FaNetworkWired, FaClock } from "react-icons/fa";

const Fees = () =>{
return(
<section>
    <div className="pt-8 lg:pt-12 max-w-8xl px-4 lg:px-20 ">
        <div className="flex justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4">Program Fee Structure</h2>
        </div>
    <div className="flex flex-wrap w-full pt-4">

  <div className="w-full lg:w-1/2 lg:px-6 flex ">
    <div className="border-t-4 border-blue-950 shadow-lg mb-6 rounded-xl p-8 flex flex-col justify-between w-full hover:shadow-xl transition">

      <div>
        <h3 className="text-2xl font-bold text-blue-950">PGDM</h3>
        <p className="text-gray-600 uppercase text-sm">
          with Global Immersion Program
        </p>
        <p className="border-b border-gray-300 py-4 mb-4 font-bold">
          Year 1: Malaysia, Year 2: Dubai
        </p>
      </div>

      <p className="text-blue-950 font-bold text-4xl mt-4">
        ₹10,80,000/-
      </p>

    </div>
  </div>

  <div className="w-full lg:w-1/2 lg:px-6 flex ">
    <div className="border-t-4 border-blue-950 shadow-lg mb-6 rounded-xl p-8 flex flex-col justify-between w-full hover:shadow-xl transition">

      <div>
        <h3 className="text-2xl font-bold text-blue-950">PGDM</h3>
        <p className="text-gray-600 uppercase text-sm">
          Core Program without Global Immersion
        </p>
      </div>

      <p className="text-blue-950 font-bold text-4xl border-t border-gray-300 pt-8">
        ₹8,95,000/-
      </p>

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
}

export default Fees;