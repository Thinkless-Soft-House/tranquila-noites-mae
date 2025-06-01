import HeroFr from "../components/HeroFr";
import PainPointsFr from "../components/PainPointsFr";
import ProductIntroFr from "../components/ProductIntroFr";
import HowItWorksFr from "../components/HowItWorksFr";
import TestimonialsFr from "../components/TestimonialsFr";
import GuaranteeFr from "../components/GuaranteeFr";
import FAQFr from "../components/FAQFr";
import FinalCTAFr from "../components/FinalCTAFr";
import { useEffect } from "react";

const IndexFr = () => {
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname !== "/fr") {
        window.location.replace("/fr");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  
  // Adiciona o script Cart Panda apenas no client-side
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <HeroFr />
      <PainPointsFr />
      <ProductIntroFr />
      <HowItWorksFr />
      <TestimonialsFr />
      <GuaranteeFr />
      <FAQFr />
      <FinalCTAFr />
    </div>
  );
};

export default IndexFr;
