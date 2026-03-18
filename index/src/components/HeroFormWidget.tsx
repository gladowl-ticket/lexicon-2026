import { useEffect } from "react";

// Declare global Zoho Form variables
// (These are provided by the embedded Zoho form script at runtime.)
declare const ZFAdvLead: any;
declare const ZFLead: any;
declare const zfutm_zfAdvLead: any;
declare const zfutm_zfLead: any;

declare global {
  interface Window {
    ZFAdvLead?: any;
    ZFLead?: any;
    zfutm_zfAdvLead?: any;
    zfutm_zfLead?: any;
  }
}

const HeroFormWidget = () => {
  useEffect(() => {
    const containerId = "zf_div_H2pChOncl8X5yB6p29ZD05LczR7Wl-37WsE_bJbAloY";
    const container = document.getElementById(containerId);
    if (!container) return;

    // Prevent duplicate iframe insertion (React Strict Mode may run effects twice in dev)
    if (container.querySelector("iframe")) return;

    try {
      var f = document.createElement("iframe");

      var ifrmSrc =
        'https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/LexiconIndex2026/formperma/H2pChOncl8X5yB6p29ZD05LczR7Wl-37WsE_bJbAloY?zf_rszfm=1';

      try {
        if (typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined") {
          for (var prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
            var utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            utmPm =
              ZFAdvLead.isSameDomian &&
              ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1
                ? "zf_" + utmPm
                : utmPm;
            var utmVal = zfutm_zfAdvLead.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (ifrmSrc.indexOf("?") > 0) {
                  ifrmSrc = ifrmSrc + "&" + utmPm + "=" + utmVal;
                } else {
                  ifrmSrc = ifrmSrc + "?" + utmPm + "=" + utmVal;
                }
              }
            }
          }
        }
        if (typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined") {
          for (var prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
            var utmPm = ZFLead.utmPNameArr[prmIdx];
            var utmVal = zfutm_zfLead.zfutm_gC_enc(ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (ifrmSrc.indexOf("?") > 0) {
                  ifrmSrc = ifrmSrc + "&" + utmPm + "=" + utmVal; //No I18N
                } else {
                  ifrmSrc = ifrmSrc + "?" + utmPm + "=" + utmVal; //No I18N
                }
              }
            }
          }
        }
      } catch (e) {}

      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = "544px";
      f.style.width = "100%";
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", "Lexicon Index 2026");

      container.appendChild(f);
      const handleMessage = (event: MessageEvent) => {
        var evntData = event.data;
        if (evntData && evntData.constructor == String) {
          var zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
            var zf_perma = zf_ifrm_data[0];
            var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
            var iframe = container.getElementsByTagName("iframe")[0];
            if (
              iframe.src.indexOf("formperma") > 0 &&
              iframe.src.indexOf(zf_perma) > 0
            ) {
              var prevIframeHeight = iframe.style.height;
              var zf_tout = false;
              if (zf_ifrm_data.length == 3) {
                iframe.scrollIntoView();
                zf_tout = true;
              }

              if (prevIframeHeight != zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(function () {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };

      window.addEventListener("message", handleMessage, false);

      return () => {
        window.removeEventListener("message", handleMessage);
      };
    } catch (e) {
    }
  }, []);

  return (
    <div className="w-full">
      <div id="zf_div_H2pChOncl8X5yB6p29ZD05LczR7Wl-37WsE_bJbAloY">
      </div>
    </div>
  );
};

export default HeroFormWidget;
