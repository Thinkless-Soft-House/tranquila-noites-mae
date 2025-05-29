
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Criar ambiente ideal",
      description: "Aprenda a preparar o quarto e criar a atmosfera perfeita para o sono do seu bebê"
    },
    {
      number: "2", 
      title: "Estabelecer rotina",
      description: "Desenvolva uma rotina consistente que funciona para você e seu bebê"
    },
    {
      number: "3",
      title: "Reduzir choros",
      description: "Técnicas comprovadas para acalmar seu bebê e reduzir o tempo de choro"
    },
    {
      number: "4",
      title: "Garantir noites tranquilas",
      description: "Implemente estratégias para noites mais longas e reparadoras"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5C2D91] mb-6">
            Veja o que você aprende com o Mamãe Tranquila
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-[#5C2D91] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-[#5C2D91]">{step.title}</h3>
              <p className="text-[#333333] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
