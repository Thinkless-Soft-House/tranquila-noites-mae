import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Para qual idade do bebê o método é indicado?",
      answer: "O método Mamãe Tranquila é eficaz para bebês de 0 a 24 meses. Temos técnicas específicas adaptadas para cada faixa etária: recém-nascidos (0-3 meses), bebês (4-12 meses) e crianças pequenas (13-24 meses). Cada fase tem suas particularidades e o guia aborda todas elas detalhadamente."
    },
    {
      question: "Funciona mesmo com bebês muito agitados?",
      answer: "Sim! Trabalhamos especialmente com bebês considerados 'difíceis' ou com alta demanda. O guia inclui técnicas específicas para bebês hiperativos, com cólicas ou que têm dificuldades para relaxar. Muitas mães relataram sucesso extraordinário justamente com bebês que pareciam impossíveis de acalmar."
    },
    {
      question: "Como vou receber o material?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá por email o link para download do guia completo em PDF. O material fica disponível para acesso ilimitado, e você pode baixar quantas vezes quiser. Também enviamos por WhatsApp para garantir que você receba."
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Absolutamente! O guia foi otimizado para leitura em celular, tablet, computador ou pode ser impresso. Sabemos que mães precisam de praticidade, então você pode consultar as técnicas a qualquer hora, em qualquer lugar, mesmo durante as madrugadas."
    },
    {
      question: "E se eu quiser meu dinheiro de volta?",
      answer: "Você tem 7 dias corridos a partir da compra para solicitar o reembolso integral, sem nenhuma pergunta ou justificativa. Basta enviar um email para nosso suporte e processamos a devolução em até 48 horas. É simples assim - sua satisfação é nossa prioridade."
    },
    {
      question: "O método funciona para gêmeos?",
      answer: "Sim! Temos uma seção especial dedicada a gêmeos e múltiplos. Sabemos que é um desafio ainda maior, por isso adaptamos as técnicas para essa realidade específica. Muitas mães de gêmeos já tiveram sucesso com nosso método."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Tire suas dúvidas
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Perguntas
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {" "}Frequentes
              </span>
            </h2>
            
            <p className="text-xl text-gray-600">
              Respondemos as principais dúvidas que outras mães tiveram
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl px-6 border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-gray-800 font-semibold hover:no-underline py-6 hover:text-primary-600">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 pl-11">
                    <div className="text-base">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Ainda tem dúvidas? 🤔
                </h3>
                <p className="text-gray-600 mb-4">
                  Nossa equipe está pronta para te ajudar! Entre em contato conosco pelo WhatsApp 
                  e tiramos todas as suas dúvidas antes da compra.
                </p>
                <a
                  href="https://wa.me/553196333896?text=Oi%2C%20tudo%20bem%3F%20Tenho%20d%C3%BAvidas%20sobre%20o%20livro%20Mam%C3%A3e%20Tranquila."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer"
                >
                  <span>💬</span>
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
