import { useState, useEffect } from "react";
import { Menu, Anchor } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      const id = href?.substring(1);
      if (id) {
        // Atualiza o hash na URL para possibilitar compartilhamento / reload na seção correta
        window.history.replaceState(null, '', `#${id}`);

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleMenuClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleMenuClick);
      });
    };
  }, []);

  // Quando a página for carregada com um hash na URL (#secao), role até ela automaticamente
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <img 
              src="/Logo-Pinto-DAO.png" 
              alt="Pinto DAO" 
              className="h-16 w-[180px] object-contain transition-transform duration-300 group-hover:scale-150 relative z-10"
            />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#recursos" className="text-neutral-700 hover:text-primary transition-colors font-medium">Sobre</a>
          <a href="#valores" className="text-neutral-700 hover:text-primary transition-colors font-medium">Valores</a>
          <a href="#produtos" className="text-neutral-700 hover:text-primary transition-colors font-medium">Produtos</a>
          <a href="#servicos" className="text-neutral-700 hover:text-primary transition-colors font-medium">Serviços</a>
          <a href="#tokens" className="text-neutral-700 hover:text-primary transition-colors font-medium">Tokens</a>
          <a href="#estrutura" className="text-neutral-700 hover:text-primary transition-colors font-medium">Estrutura</a>
          <a href="#equipe" className="text-neutral-700 hover:text-primary transition-colors font-medium">Membros</a>
          <a href="#faq" className="text-neutral-700 hover:text-primary transition-colors font-medium">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
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
            <a href="#recursos" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Sobre</a>
            <a href="#valores" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Valores</a>
            <a href="#produtos" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Produtos</a>
            <a href="#servicos" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Serviços</a>
            <a href="#tokens" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Tokens</a>
            <a href="#estrutura" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Estrutura</a>
            <a href="#equipe" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Membros</a>
            <a href="#faq" className="text-neutral-700 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">FAQ</a>
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
