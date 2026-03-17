import React from "react";
import { useEnquireModal } from "../contexts/EnquireModalContext";

const CTASection = () => {
const { openModal } = useEnquireModal();

return (
<section className=" pb-12 lg:px-20 px-4">
    <div className="relative rounded-lg overflow-hidden p-4 lg:px-8 lg:py-12">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('./cta/1.jpg')",
        }}></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 ">
            <div className="w-full flex justify-center flex-wrap">
                {/* Quote */}
                <blockquote className="text-white text-2xl lg:text-3xl font-bold w-full lg:w-10/12 uppercase text-start mb-4 lg:mb-0">
                    The best connections don't come from one country <br />
                     they come from every corner of the world.
                </blockquote>
                <div className="w-full lg:w-2/12 flex items-center lg:justify-end justify-center">
                
                {/* CTA Button */}
                <button onClick={openModal}
                    className="inline-block bg-[#F6B700] hover:bg-[#e5a600] text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                    Enquire Now
                </button></div>
            </div>
        </div>

    </div>
</section>
);
};

export default CTASection;