
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF6FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5C2D91] mb-6">
            Você não está sozinha.
            <span className="block text-[#FFD166]">Dê o primeiro passo.</span>
          </h2>
          
          <p className="text-xl text-[#333333] mb-8 leading-relaxed">
            Com o Mamãe Tranquila, você pode ter noites de paz e dias mais leves.
          </p>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
              alt="Mamãe Tranquila - Guia Digital" 
              className="w-full max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          
          <Button 
            size="lg" 
            className="bg-[#5C2D91] hover:bg-[#4A2475] text-white px-12 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mb-4"
          >
            Quero transformar minhas noites agora
          </Button>
          
          <p className="text-sm text-[#333333] opacity-75">
            🔒 Compra 100% segura • ✅ Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
