import { Coffee, BookOpen, Code, Laptop, PenTool } from "lucide-react";

interface Product {
  icon: any;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
  buttonText: string;
}

const Products = () => {
  const products: Product[] = [
    {
      icon: Coffee,
      title: "Helenai",
      description: "Uma agente de IA com IP compartilhada que atua como atriz avatar em diferentes projetos e marcas. Nossa primeira SubDAO focada em nosso core approach experimental ligado a AI.,
      link: "https://helenai.xyz/",
      isExternal: true,
      buttonText: "Conheça Helen"
    },
    {
      icon: BookOpen,
      title: "Aulas e Researchs",
      description: "Conteúdo educacional produzido por especialistas de diferentes nichos Web3, entre membros e convidados. Inclui análises aprofundadas de projetos, protocolos e tendências do mercado.",
      link: "https://discord.pinto.wtf",
      isExternal: true,
      buttonText: "Participe do Discord"
    },
    {
      icon: Code,
      title: "Golden Team Callers",
      description: "Squad especializado em diferentes estratégias Web3, desde análise de memecoins até gestão de portfólio de longo prazo. Escolhas amplas para cada tipo de perfil.",
      link: "https://docs.pinto.wtf/docs/pinto-brasil/callers",
      isExternal: true,
      buttonText: "Conhecer Callers"
    },
    {
      icon: Laptop,
      title: "AI Lab",
      description: "Lab de soluções com IA. Criamos ferramentas e produtos experimentais para uso interno e externo, focando em aplicações práticas.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc1jcinGf6Dmh1Vlwx8roC5mdMtKAJpCyvDA60nMJPDOw_WGQ/viewform?usp=dialog",
      isExternal: true,
      buttonText: "Marque uma reunião"
    },
    {
      icon: PenTool,
      title: "Community Pools",
      description: "Pools coletivos para oportunidades especiais. Unimos recursos para acessar presales, desenvolver ferramentas e participar de projetos que demandam maior capital financeiro ou social.",
      link: "https://discord.pinto.wtf",
      isExternal: true,
      buttonText: "Participe do Discord"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.title} 
              className="flex flex-col items-start text-left p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow min-h-[320px]"
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
      </div>
    </section>
  );
};

export default Products;
