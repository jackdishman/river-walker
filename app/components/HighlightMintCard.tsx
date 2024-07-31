"use client";
import { useEffect } from "react";

const HighlightMintCard = () => {
  useEffect(() => {
    // Load the script dynamically
    const script = document.createElement("script");
    script.src = "https://mint.highlight.xyz/assets/embed.js?v=1";
    script.type = "module";
    script.crossOrigin = "true";
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://mint.highlight.xyz/assets/embed.css"
      />
      <div
        data-widget="highlight-mint-card"
        data-mint-collection-id="66a0550c267546fa5ab66cc6"
        data-theme='{"bgColor":"#F0FDFA","textColor":"#0D9488","accentColor":"#2DD4BF"}'
      ></div>
    </div>
  );
};

export default HighlightMintCard;
