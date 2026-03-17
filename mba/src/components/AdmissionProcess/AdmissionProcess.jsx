import React from "react";

const AdmissionProcess = () => {

  return (
    <section className="">
      <div className="pb-12 container ">
        <div className="flex justify-center ">
            <h2 className="text-4xl lg:text-5xl text-blue-950 font-bold">Admission Process</h2>
        </div>
        <img src="./admission/1.png" className="w-full h-auto object-contain hidden lg:block" alt="" />
        <img src="./admission/2.png" className="w-full h-auto object-contain lg:hidden" alt="" />
      </div>
    </section>
  );
};

export default AdmissionProcess;