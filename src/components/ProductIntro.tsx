
import { Star } from "lucide-react";

const ProductIntro = () => {
  const features = [
    "Técnicas de sono validadas",
    "Checklists práticos", 
    "Depoimentos reais",
    "Plano de 7 dias"
  ];

  return (
    <section className="py-20 bg-[#FFF6FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5C2D91] mb-6">
            Um guia que te acolhe e te ensina
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
            O Mamãe Tranquila é mais que um guia - é o apoio que você precisa para transformar 
            suas noites e viver uma maternidade mais leve e segura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-[#5C2D91]" />
              </div>
              <h3 className="text-lg font-semibold text-[#5C2D91] mb-2">{feature}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
            alt="Mamãe Tranquila - Guia Digital" 
            className="w-full max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
