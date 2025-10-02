import React from "react";
import { Lightbulb } from "lucide-react";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
  buttonText: string;
  isSpecial?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      image: "/helenaiwtf.png",
      title: "Helenai.wtf",
      description:
        "Agente ativa no X, discord. Presente como avatar no Instagram, Tiktok, Youtube, Spotify com músicas autorais e clipes, gifs no whatsapp, instagram e discord.",
      link: "https://helenai.wtf",
      isExternal: true,
      buttonText: "Visitar Site",
    },
    {
      image: "/aitagapp.png",
      title: "AItag.app",
      description:
        "Curadoria de ferramentas de AI, com busca avançada, recomendações personalizadas, customização de share e webapp para desktop e mobile",
      link: "https://aitag.app",
      isExternal: true,
      buttonText: "Visitar Site",
    },
    {
      image: "/botsinners.png",
      title: "Virtuals bot",
      description:
        "Bot construido com habilidade do sinners e capital de diversos membros da comunidade em pool, no qual o saldo saiu muito positivo, nesse momento competitivo da Virtuals",
      link: "https://discord.pinto.wtf",
      isExternal: true,
      buttonText: "Ver no Discord",
    },
    {
      image: "/Ecossistema-sapiens-sinteticos.png",
      title: "Sapiens Sintéticos",
      description:
        "Ecossistema de aprendizagem e ferramentas de AI",
      link: "https://www.sapienssintetico.com",
      isExternal: true,
      buttonText: "Visitar Site",
    },
    {
      image: "/chickwar.png",
      title: "Chick Wars",
      description:
        "Minigame ganhador de competição Tier2 de IA com Web3",
      link: "https://remix.gg/?game=83c05a35-b182-42e4-85ec-a9df4926decf",
      isExternal: true,
      buttonText: "Jogar",
    },
    {
      image: "/pbrasilyoutube.jpeg",
      title: "Aulas e Entrevistas Especiais",
      description:
        "Compilado de entrevistas e aulas sobre Web3 e AI com convidados especiais da comunidade",
      link: "https://www.youtube.com/@PBrasilDAO",
      isExternal: true,
      buttonText: "Assistir no YouTube",
    },
  ];

  const allCards: Project[] = [
    ...projects,
    {
      image: "", // nenhum
      title: "Traga seu Projeto",
      description:
        "Tem um projeto que quer construir junto com a DAO? Entre em contato e vamos construir juntos!",
      link: "https://discord.pinto.wtf",
      isExternal: true,
      buttonText: "Propor Projeto",
      isSpecial: true,
    },
  ];

  return (
    <section id="produtos" className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            PROJETOS DA COMUNIDADE
          </span>
          <h2 className="heading-lg mt-6">Projetos da Comunidade</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Iniciativas que nasceram e crescem dentro da comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allCards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start text-left p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow min-h-[460px] ${
                card.isSpecial
                  ? "bg-gradient-to-br from-accent-purple/10 to-accent-purple/20 border-2 border-accent-purple/20"
                  : "bg-white"
              }`}
            >
              {/* Imagem ou ícone */}
              {card.isSpecial ? (
                <div className="w-full h-40 mb-6 flex items-center justify-center rounded-xl bg-accent-purple/10">
                  <Lightbulb className="w-12 h-12 text-accent-purple" />
                </div>
              ) : (
                <div className="w-full h-40 mb-6 overflow-hidden rounded-xl group bg-neutral-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Conteúdo */}
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {card.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                {card.description}
              </p>

              {/* Botão */}
              <a
                href={card.link}
                className={`mt-auto ${card.isSpecial ? "button-primary" : "button-secondary"} w-full text-center`}
                {...(card.isExternal
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
