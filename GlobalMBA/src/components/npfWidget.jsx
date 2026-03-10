import React, { useEffect } from "react";

export const NpfWidget = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div >
        <h2 className = "npf-widget-heading font-bold text-white bg-[#f6b70073] backdrop-blur-sm px-8 py-2">
            Admission Enquiry Form
        </h2>
      <div
        className="npf_wgts"
        data-height="500px"
        data-w="fd37411573d119bbd2e5c2b82759603e"
      ></div>
    </div>
  );
};