import { useEffect } from "react";

const NPF_CARD_CSS = `
  .npf_wgts {
    width: 100%;
    min-height: 400px;
  }
  .npf_wgts iframe {
    width: 100%;
    min-height: 400px;
    border: 0;
    display: block;
  }
  #npf-hero-frame {
    width: 100%;
    border: none;
    display: block;
  }
`;

const HeroFormWidget = () => {
  useEffect(() => {
    // Inject CSS once
    const styleId = "npf-card-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = NPF_CARD_CSS;
      document.head.appendChild(style);
    }

    // Inject NPF script once
    const scriptId = "npf-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://widgets.nopaperforms.com/emwgts.js";
      script.async = true;
      script.onload = () => {
        if (typeof window !== "undefined") {
          (window as unknown as { npfWidgetsInit?: () => void }).npfWidgetsInit?.();
        }
      };
      document.body.appendChild(script);
    } else if (typeof window !== "undefined") {
      (window as unknown as { npfWidgetsInit?: () => void }).npfWidgetsInit?.();
    }
  }, []);

  return (
    <div className="w-full">
      <div
        className="npf_wgts w-full min-h-[400px]"
        data-height="410px"
        data-w="104bf25d3c65c756d2c4175bdddcc6c5"
      ></div>
    </div>
  );
};

export default HeroFormWidget;