import React, { useEffect, useState } from "react";

export const NpfWidget = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const height = width >= 1024 && width <= 1100 ? "350px" : "480px";

  return (
    <div className="bg-white rounded-lg">
      <iframe
        aria-label="Lexicon MBA 2026"
        className="zoho-forms"
        style={{ height: height, width: "99%", border: "none" }}
        src="https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/LexiconMBA2026/formperma/25q49B6n0iH62uTHTpMSS5SXeJtaOzPW_4HEqc1TjmY"
      ></iframe>
    </div>
  );
};