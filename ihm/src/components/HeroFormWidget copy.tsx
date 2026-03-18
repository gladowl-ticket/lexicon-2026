import { useEffect, useState } from "react";

const HeroFormWidget = () => {
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 1500) {
        setHeight("400px");
      } else {
        setHeight("500px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    // only add the script once
    const existing = document.querySelector(
      'script[src="https://widgets.in5.nopaperforms.com/emwgts.js"]'
    );
    if (!existing) {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height={height}
      data-w="fd37411573d119bbd2e5c2b82759603e"
    ></div>
  );
};

export default HeroFormWidget;
