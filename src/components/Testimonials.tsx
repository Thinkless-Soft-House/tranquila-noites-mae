
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo, SP",
      image: "/lovable-uploads/07734f1e-a5f0-4aba-971a-2dc3247575f4.png",
      text: "Em 3 dias minha filha já dormia a noite toda. Não acreditei que seria tão rápido!"
    },
    {
      name: "Ana Costa", 
      city: "Rio de Janeiro, RJ",
      image: "/lovable-uploads/3d25edc9-75e1-4ebe-a4aa-53ac97b5ae70.png",
      text: "Finalmente consegui dormir! O guia salvou minha sanidade mental e meu casamento."
    },
    {
      name: "Carla Santos",
      city: "Belo Horizonte, MG", 
      image: "/lovable-uploads/5da3d5d9-b257-4191-a403-37731032c15e.png",
      text: "Estava no limite do esgotamento. Este guia me deu esperança e resultados reais."
    }
  ];

  return (
    <section className="py-20 bg-[#FFF6FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5C2D91] mb-6">
            Histórias reais, mudanças reais
          </h2>
          <p className="text-xl text-[#333333]">
            Veja como outras mães transformaram suas noites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD166] fill-current" />
                ))}
              </div>
              
              <p className="text-[#333333] italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold text-[#5C2D91]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
