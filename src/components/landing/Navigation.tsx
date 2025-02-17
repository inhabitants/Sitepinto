import { useState, useEffect } from "react";
import { Menu, Anchor } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <img 
              src="/Logo-Pinto-DAO.png" 
              alt="Pinto DAO" 
              className="h-16 w-[180px] object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
            />
            <div className="absolute inset-0 bg-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-0"></div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#recursos" className="text-neutral-600 hover:text-primary transition-colors font-medium">Sobre</a>
          <a href="#valores" className="text-neutral-600 hover:text-primary transition-colors font-medium">Valores</a>
          <a href="#produtos" className="text-neutral-600 hover:text-primary transition-colors font-medium">Produtos</a>
          <a href="#estrutura" className="text-neutral-600 hover:text-primary transition-colors font-medium">Estrutura</a>
          <a href="#equipe" className="text-neutral-600 hover:text-primary transition-colors font-medium">Membros</a>
          <a href="#faq" className="text-neutral-600 hover:text-primary transition-colors font-medium">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://docs.pinto.wtf/docs/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Docs
          </a>
          <a 
            href="https://discord.pinto.wtf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Comunidade
          </a>
        </div>

        <button 
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <a href="#recursos" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Sobre</a>
            <a href="#valores" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Valores</a>
            <a href="#produtos" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Produtos</a>
            <a href="#estrutura" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg flex items-center gap-1">
              <Anchor className="w-4 h-4" />
              Estrutura
            </a>
            <a href="#equipe" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Membros</a>
            <a href="#faq" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">FAQ</a>
            <hr className="border-neutral-200" />
            <a 
              href="https://discord.pinto.wtf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary w-full text-center"
            >
              Comunidade
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
