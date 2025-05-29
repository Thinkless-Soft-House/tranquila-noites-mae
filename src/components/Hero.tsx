
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF6FA] to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/lovable-uploads/f89c4eb7-377c-4100-8dde-b118becb677d.png" 
            alt="Mamãe Tranquila Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#5C2D91] leading-tight">
              Cansada de noites sem dormir?
              <span className="block text-[#FFD166]">Nós temos a solução.</span>
            </h1>
            
            <p className="text-xl text-[#333333] leading-relaxed">
              Descubra o guia que tem transformado a rotina de milhares de mães.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#5C2D91] hover:bg-[#4A2475] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Quero minha maternidade mais leve
            </Button>
          </div>
          
          <div className="flex justify-center animate-scale-in">
            <img 
              src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
              alt="Mamãe Tranquila - Guia Digital" 
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFD166] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#5C2D91] rounded-full opacity-10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
