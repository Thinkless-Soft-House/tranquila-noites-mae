
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProductIntro from "@/components/ProductIntro";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFF6FA]">
      <Hero />
      <PainPoints />
      <ProductIntro />
      <HowItWorks />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
