import React from 'react';
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Comunidade DAO",
      description: "Faça parte de uma comunidade que pode aprender e construir junto.",
      points: ["Benefícios Exclusivos", "Pesquisa Web3", "Governança Participativa"],
      image: "/PintoSquare.jpg",
      primaryLink: "https://discord.pinto.wtf",
      secondaryLink: "https://docs.pinto.wtf/docs/pinto-brasil/intro"
    },
    {
      title: "HelenAI - Shared IP Artista Digital",
      description: "Uma agente de IA de IP compartilhada que funciona como uma atriz multibrand.",
      points: ["Brand Compartilhada", "Colaboração Criativa", "Produção visual"],
      image: "/Helens.gif",
      primaryLink: "https://helenai.xyz",
      secondaryLink: "https://docs.pinto.wtf/docs/pinto-brasil/helen"
    }
  ];

  return (
    <section className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            SOBRE
          </span>
          <h2 className="heading-lg mt-6">Irreverência e cooperação para além do alfa</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Acompanhe callers, aprenda sobre rendimentos, construa em conjunto, experiente algo novo
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-600 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-purple" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-neutral-600 hover:text-primary transition-colors"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="flex-1">
              <Card className="glass-panel p-6 rounded-2xl">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;