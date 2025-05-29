
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "É indicado para qual idade do bebê?",
      answer: "O guia é indicado para bebês de 0 a 24 meses. As técnicas são adaptáveis para cada faixa etária, com orientações específicas para recém-nascidos e bebês maiores."
    },
    {
      question: "Funciona mesmo com bebê agitado?",
      answer: "Sim! O guia inclui técnicas específicas para bebês mais agitados e com dificuldades para relaxar. Muitas mães relataram sucesso mesmo com bebês considerados 'difíceis'."
    },
    {
      question: "Como recebo o material?",
      answer: "Após a compra, você recebe imediatamente por email o link para download do PDF. O material fica disponível para acesso ilimitado."
    },
    {
      question: "Posso acessar no celular?",
      answer: "Sim! O material em PDF pode ser lido em qualquer dispositivo: celular, tablet, computador ou impresso."
    },
    {
      question: "E se eu quiser meu dinheiro de volta?",
      answer: "Você tem 7 dias corridos para solicitar o reembolso integral, sem nenhuma pergunta. Basta enviar um email e processamos a devolução."
    }
  ];

  return (
    <section className="py-20 bg-[#FFF6FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5C2D91] text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-md"
              >
                <AccordionTrigger className="text-left text-[#5C2D91] font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#333333] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
