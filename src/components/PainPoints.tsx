
import { Check } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    "Dorme mal todas as noites",
    "Se sente esgotada física e emocionalmente", 
    "Tem medo de errar como mãe",
    "Chora escondida de cansaço"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-[#5C2D91] text-center lg:text-left">
              Você se sente assim?
            </h2>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-[#FFF6FA] rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#5C2D91]" />
                  </div>
                  <p className="text-[#333333] text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/8fa50c17-6da6-418d-8d50-ebe70eaf1e2c.png" 
              alt="Mãe cansada com bebê" 
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
