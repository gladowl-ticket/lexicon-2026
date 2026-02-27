import { useEffect } from "react";

// Inject minimal CSS overrides for the NPF iframe container appearance
const NPF_CARD_CSS = `
  /* Make the iframe widget container match the card style */
  #npf-hero-frame {
    width: 100%;
    border: none;
    display: block;
  }
`;

const HeroFormWidget = () => {
  useEffect(() => {
    const styleId = "npf-card-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = NPF_CARD_CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <iframe
      id="npf-hero-frame"
      frameBorder="0"
      width="100%"
      height="440"
      src="https://widgets.nopaperforms.com/register?&w=104bf25d3c65c756d2c4175bdddcc6c5"
      title="Application Form"
      style={{ minHeight: "440px" }}
    />
  );
};

export default HeroFormWidget;
