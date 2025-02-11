
import { Puzzle, Apple, Zap, HelpCircle } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Puzzle,
      title: "Companheirismo",
      description: "Aqui, todo mundo se ajuda. Temos um bando forte, em que cada membro apoia o outro em projetos, estudos e, claro, nas loucuras de risco degen."
    },
    {
      icon: Apple,
      title: "Vanguardismo",
      description: "Não temos medo de chocar ideias ousadas. Testamos protocolos novos, criamos ferramentas próprias e estamos sempre prontos para um "ovo surpresa" que seja net positive"
    },
    {
      icon: Zap,
      title: "Construção Coletiva",
      description: "Juntamos conhecimentos técnicos, criatividade e nossa dose de loucura para desenvolver produtos, ferramentas, bots e agentes como HelenAI. Cada contribuição tempera essa "sopa" que alimenta toda a DAO."
    },
    {
      icon: HelpCircle,
      title: "Estudando com prazer",
      description: "Aprender não é só encher a cabeça de teoria: é criar laços e se divertir no processo. Organizamos experimentos, aulas, pesquisas, e convidamos especialistas para trocar ideias de forma leve e interativa. Enquanto uns ciscam dados, outros bicam novos conceitos, e todo mundo sai mais forte, com boas risadas e bagagem."
    }
  ];

  return (
    <section className="py-24 bg-neutral-100">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            NOSSOS VALORES
          </span>
          <h2 className="heading-lg mt-6">Construindo juntos</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Conheça os valores que guiam nossa comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
