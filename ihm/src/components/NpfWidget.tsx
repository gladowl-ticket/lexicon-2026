import { useEffect } from "react";

interface NpfWidgetProps {
  widgetId?: string;
  height?: string;
}

const SCRIPT_SRC = "https://widgets.in5.nopaperforms.com/emwgts.js";

const NpfWidget = ({ 
  widgetId = "fd37411573d119bbd2e5c2b82759603e",
  height = "500px"
}: NpfWidgetProps) => {
  useEffect(() => {
    // If the script isn't present, add it.
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = SCRIPT_SRC;
      document.body.appendChild(s);
      return;
    }

    // If the script is already present, re-run it once to let it initialize
    // any widgets that are dynamically inserted into the DOM (like in modal).
    const reinit = document.createElement("script");
    reinit.type = "text/javascript";
    reinit.async = true;
    reinit.src = SCRIPT_SRC;
    reinit.setAttribute("data-npf-reinit", "1");
    const cleanup = () => {
      // remove the reinit script after it loads to keep DOM clean
      if (reinit.parentNode) reinit.parentNode.removeChild(reinit);
    };
    reinit.addEventListener("load", cleanup);
    document.body.appendChild(reinit);

    return () => {
      reinit.removeEventListener("load", cleanup);
      if (reinit.parentNode) reinit.parentNode.removeChild(reinit);
    };
  }, [widgetId]);

  return (
    <div
      className="npf_wgts bg-white"
      data-height={height}
      data-w={widgetId}
      style={{ minHeight: height }}
    />
  );
};

export default NpfWidget;
