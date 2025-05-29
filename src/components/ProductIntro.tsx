
import { Star, BookOpen, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductIntro = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Técnicas validadas cientificamente",
      description: "Métodos aprovados por pediatras e especialistas em sono infantil"
    },
    {
      icon: CheckCircle,
      title: "Checklists práticos",
      description: "Guias passo a passo para implementar cada técnica com facilidade"
    },
    {
      icon: Users,
      title: "Depoimentos reais",
      description: "Histórias inspiradoras de mães que transformaram suas noites"
    },
    {
      icon: Clock,
      title: "Plano de 7 dias",
      description: "Cronograma estruturado para resultados rápidos e duradouros"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Método #1 em sono infantil
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Mais que um guia,<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              uma transformação completa
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            O <strong className="text-primary-600">Mamãe Tranquila</strong> é o resultado de anos de pesquisa e 
            experiência real com milhares de famílias. Um método que realmente funciona.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-scale-in order-2 lg:order-1" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-3xl opacity-30 transform rotate-3"></div>
              <img 
                src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
                alt="Mamãe Tranquila - Guia Digital" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 animate-fade-in order-1 lg:order-2" style={{animationDelay: '0.6s'}}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                O que você encontra dentro do guia:
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "7 técnicas comprovadas para fazer o bebê dormir rapidamente",
                  "Como criar o ambiente perfeito para o sono",
                  "Rotinas que realmente funcionam para cada idade",
                  "O que fazer quando nada parece funcionar",
                  "Técnicas de auto-cuidado para a mãe exausta",
                  "Plano de implementação dia a dia"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 sm:p-6 rounded-2xl border border-primary-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Bônus Exclusivo</h4>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Acesso ao grupo privado</strong> com outras mães que estão passando pela mesma jornada. 
                Suporte, dicas e muito carinho! 💜
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full lg:w-auto"
            >
              🎯 Quero transformar minhas noites
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
