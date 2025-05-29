
import { ArrowRight, Heart, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-600 via-purple-700 to-primary-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-400 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-300 rounded-full opacity-30 blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
              <Heart className="w-4 h-4" />
              Sua jornada de transformação começa aqui
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Você não está sozinha.<br />
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                Dê o primeiro passo.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed px-4">
              Com o Mamãe Tranquila, você pode ter noites de paz e dias mais leves.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
            <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1" style={{animationDelay: '0.2s'}}>
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  💜 Uma mãe descansada é uma mãe melhor
                </h3>
                
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  Você merece noites tranquilas, dias mais leves e a confiança de que está 
                  cuidando do seu bebê da melhor forma possível. Dê esse presente para você e sua família.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    "✅ Acesso imediato ao guia completo",
                    "✅ Bônus: Grupo exclusivo de mães",
                    "✅ Suporte dedicado por 30 dias",
                    "✅ Garantia total de 7 dias"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white text-sm sm:text-base">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in order-1 lg:order-2" style={{animationDelay: '0.4s'}}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md mx-auto">
                <img 
                  src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
                  alt="Mamãe Tranquila - Guia Final" 
                  className="w-full rounded-2xl mb-6"
                />
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full group mb-4"
                >
                  ✅ Quero transformar minhas noites agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
                
                <p className="text-center text-xs text-gray-500">
                  Pagamento processado com segurança
                </p>
              </div>
            </div>
          </div>

          {/* Urgency banner */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 sm:p-6 text-center animate-pulse">
            <div className="flex items-center justify-center gap-2 text-white font-bold text-base sm:text-lg mb-2">
              <Clock className="w-5 h-5" />
              ⏰ Últimas horas da promoção
            </div>
            <p className="text-white text-sm sm:text-base">
              O preço promocional de R$ 37 é válido apenas hoje!
            </p>
          </div>

          <div className="text-center mt-8 sm:mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center justify-center gap-2 text-sm text-purple-200 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm">Avaliação 4.9/5 (2.847 avaliações)</span>
            </div>
            
            <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Junte-se às milhares de mães que já transformaram suas vidas e 
              descobriram o segredo para noites tranquilas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
