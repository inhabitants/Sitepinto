
import { Coffee, BookOpen, Code, Laptop, PenTool } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Coffee,
      title: "Café com Dev",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/cafe-com-dev"
    },
    {
      icon: BookOpen,
      title: "Cursos e Workshops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/cursos"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/desenvolvimento"
    },
    {
      icon: Laptop,
      title: "HelenAI Lab",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/helen-ai"
    },
    {
      icon: PenTool,
      title: "Criação de NFTs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/nfts"
    }
  ];

  return (
    <section id="produtos" className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            PRODUTOS E SERVIÇOS
          </span>
          <h2 className="heading-lg mt-6">O que oferecemos</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Explore nossa variedade de produtos e serviços para a comunidade Web3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.title} 
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center mb-6">
                <product.icon className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {product.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {product.description}
              </p>
              <a 
                href={product.link}
                className="mt-auto button-secondary w-full"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
