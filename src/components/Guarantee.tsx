
import { Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Guarantee = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-6">
              <Shield className="w-4 h-4" />
              100% Livre de risco
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Garantia Total de<br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                7 Dias
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Guarantee details */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-white rounded-3xl p-8 shadow-lg border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Risco Zero</h3>
                    <p className="text-green-600 font-medium">Sua satisfação garantida</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>7 dias completos</strong> para testar todo o conteúdo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Reembolso integral</strong> sem perguntas ou burocracia
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Suporte dedicado</strong> durante todo o período
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  💡 Como funciona nossa garantia:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-gray-700">Adquira o guia hoje</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-gray-700">Teste por 7 dias completos</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-gray-700">Não gostou? Devolvemos 100% do valor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Guarantee image and CTA */}
            <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="/lovable-uploads/67e2abde-2a80-4d9f-9eba-48ac1f182fbd.png" 
                  alt="Garantia de 7 dias" 
                  className="relative w-48 h-48 mx-auto drop-shadow-2xl"
                />
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Sua tranquilidade é nossa prioridade
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Estamos tão confiantes nos resultados que oferecemos essa garantia incondicional. 
                  Você não tem nada a perder, apenas noites de paz a ganhar.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-semibold text-gray-800">Oferta por tempo limitado</span>
                  </div>
                  <p className="text-gray-600 text-center">
                    Aproveite nossa garantia estendida e comece sua transformação hoje mesmo
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full group"
                >
                  🛡️ Quero começar com segurança total
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
