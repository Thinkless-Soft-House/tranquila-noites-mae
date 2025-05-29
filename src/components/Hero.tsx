
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-purple-700 to-primary-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-400 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-300 rounded-full opacity-30 blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-10 blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Mais de 5.000 mães transformadas</span>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Cansada de noites
                <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  sem dormir?
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Descubra o guia que tem transformado a rotina de milhares de mães
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-8 py-6 lg:py-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-300">97%</div>
                <div className="text-sm sm:text-base text-purple-200">das mães recomendam</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-300">7 dias</div>
                <div className="text-sm sm:text-base text-purple-200">para ver resultados</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-4 lg:px-8 lg:py-6 text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
              >
                🎯 Quero minha maternidade mais leve
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-purple-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm">Avaliação 4.9/5 (2.847 avaliações)</span>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 rounded-3xl blur-3xl opacity-30 transform rotate-6"></div>
              <img 
                src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
                alt="Mamãe Tranquila - Guia Digital" 
                className="relative w-72 sm:w-80 lg:w-96 max-w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Award className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">7 dias</div>
                  <div className="text-sm text-gray-600">de garantia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 max-w-2xl mx-auto">
            <p className="text-white text-sm sm:text-base mb-4">
              ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte dedicado
            </p>
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              ⏰ Oferta por tempo limitado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
