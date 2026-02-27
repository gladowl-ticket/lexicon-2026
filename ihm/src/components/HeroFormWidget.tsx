import { useEffect } from "react";

const HeroFormWidget = () => {
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
      data-height="500px"
      data-w="fd37411573d119bbd2e5c2b82759603e"
    ></div>
  );
};

export default HeroFormWidget;
