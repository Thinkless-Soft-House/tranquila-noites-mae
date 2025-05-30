import HeroGer from "@/components/HeroGer";
import PainPointsGer from "@/components/PainPointsGer";
import ProductIntroGer from "@/components/ProductIntroGer";
import HowItWorksGer from "@/components/HowItWorksGer";
import TestimonialsGer from "@/components/TestimonialsGer";
import GuaranteeGer from "@/components/GuaranteeGer";
import FAQGer from "@/components/FAQGer";
import FinalCTAGer from "@/components/FinalCTAGer";
import { useEffect } from "react";

const Ger = () => {
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname !== "/downsell") {
        window.location.replace("/downsell");
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
      <HeroGer />
      <PainPointsGer />
      <ProductIntroGer />
      <HowItWorksGer />
      <TestimonialsGer />
      <GuaranteeGer />
      <FAQGer />
      <FinalCTAGer />
    </div>
  );
};

export default Ger;
