import React from 'react';
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Pinto Brasil DAO",
      description: "Uma comunidade vanguardista focada em pesquisa e experimentação em Web3 e IA. Aqui você encontra um ambiente colaborativo para conhecer pessoas, criar projetos experimentais e explorar novas tecnologias.",
      points: [
        "Pesquisa em Web3 e IA", 
        "Projetos Experimentais", 
        "Aprendizado de Ferramentas Web3",
        "Compreensão de Tokens e Blockchain",
        "Exploração de Novas Tecnologias",
        "Comunidade Colaborativa"
      ],
      image: "/PintoSquare.jpg",
      primaryLink: "https://discord.pinto.wtf",
      secondaryLink: "#servicos"
    }
  ];

  return (
    <section className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            SOBRE
          </span>
          <h2 className="heading-lg mt-6">Vanguarda Exploratória em Web3 e IA</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Um espaço para experimentar, aprender e construir o futuro da tecnologia descentralizada
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-600 mb-8 text-lg max-w-2xl mx-auto">{feature.description}</p>
              
              <div className="flex justify-center mb-8">
                <Card className="glass-panel p-3 rounded-2xl max-w-xs">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded-lg"
                  />
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                {feature.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-left">
                    <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-purple" />
                    </div>
                    <span className="text-neutral-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <a 
                  href={feature.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  Participar Agora
                </a>
                <a 
                  href={feature.secondaryLink}
                  className="px-6 py-3 text-neutral-600 hover:text-primary transition-colors"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
