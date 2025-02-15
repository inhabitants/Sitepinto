import React from 'react';
import { Coffee, BookText, LineChart, TestTube, Users, LucideIcon, Lightbulb } from "lucide-react";

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
  buttonText: string;
  isSpecial?: boolean;
}

const Products = () => {
  const products: Product[] = [
    {
      icon: Coffee,
      title: "Helenai",
      description: "Uma agente de IA com IP compartilhada que atua como atriz avatar em diferentes projetos e marcas. Nossa primeira SubDAO focada em nosso core approach experimental ligado a AI.",
      link: "https://helenai.xyz/",
      isExternal: true,
      buttonText: "Conheça Helen"
    },
    {
      icon: BookText,
      title: "Aulas e Researchs",
      description: "Conteúdo educacional produzido por especialistas de diferentes nichos Web3, entre membros e convidados. Inclui análises aprofundadas de projetos, protocolos e tendências do mercado.",
      link: "https://discord.pinto.wtf",
      isExternal: true,
      buttonText: "Participe do Discord"
    },
    {
      icon: LineChart,
      title: "Golden Team Callers",
      description: "Squad especializado em diferentes estratégias Web3, desde análise de memecoins até gestão de portfólio de longo prazo. Escolhas amplas para cada tipo de perfil.",
      link: "https://docs.pinto.wtf/docs/pinto-brasil/callers",
      isExternal: true,
      buttonText: "Conhecer Callers"
    },
    {
      icon: TestTube,
      title: "AI Lab",
      description: "Lab de soluções com IA. Criamos ferramentas e produtos experimentais para uso interno e externo, focando em aplicações práticas.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc1jcinGf6Dmh1Vlwx8roC5mdMtKAJpCyvDA60nMJPDOw_WGQ/viewform?usp=dialog",
      isExternal: true,
      buttonText: "Marque uma reunião"
    },
    {
      icon: Users,
      title: "Community Pools",
      description: "Pools coletivos para oportunidades especiais. Unimos recursos para acessar presales, desenvolver ferramentas e participar de projetos que demandam maior capital financeiro ou social.",
      link: "https://discord.pinto.wtf",
      isExternal: true,
      buttonText: "Participe do Discord"
    }
  ];

  const specialCard = {
    icon: Lightbulb,
    title: "Proponha sua SubDAO",
    description: "Você tem um projeto e quer ampliar ele por meio de uma comunidade experimental? Transforme-o em uma SubDAO e agregue valor tanto para ele quanto para seus usuários.",
    link: "https://discord.pinto.wtf",
    isExternal: true,
    buttonText: "Propor Projeto",
    isSpecial: true
  };

  return (
    <section id="produtos" className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            PRODUTOS & SERVIÇOS
          </span>
          <h2 className="heading-lg mt-6">O que nossa comunidade oferece</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Descubra as propostas de valor de nossa comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.title} 
              className="flex flex-col items-start text-left p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow min-h-[380px]"
            >
              <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center mb-6">
                <product.icon className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {product.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                {product.description}
              </p>
              <a 
                href={product.link}
                className="mt-auto button-secondary w-full"
                {...(product.isExternal ? {
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {})}
              >
                {product.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-7xl mx-auto">
          <div className="flex flex-col items-start text-left p-8 bg-gradient-to-br from-accent-purple/10 to-accent-purple/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow min-h-[380px] border-2 border-accent-purple/20">
            <div className="w-16 h-16 rounded-full bg-accent-purple/20 flex items-center justify-center mb-6">
              <specialCard.icon className="w-8 h-8 text-accent-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">
              {specialCard.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
              {specialCard.description}
            </p>
            <div className="flex gap-4 mt-auto w-full">
              <a 
                href={specialCard.link}
                className="button-primary flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {specialCard.buttonText}
              </a>
              <a 
                href="https://docs.pinto.wtf"
                className="button-secondary flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Documentação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
