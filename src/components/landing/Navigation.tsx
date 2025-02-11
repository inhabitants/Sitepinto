
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img src="/pinto-dao-logo.svg" alt="Pinto DAO" className="h-12 w-[130px] object-contain" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#recursos" className="text-neutral-600 hover:text-primary transition-colors font-medium">Recursos</a>
          <a href="#valores" className="text-neutral-600 hover:text-primary transition-colors font-medium">Nossos Valores</a>
          <a href="#equipe" className="text-neutral-600 hover:text-primary transition-colors font-medium">Nossa Equipe</a>
          <a href="#faq" className="text-neutral-600 hover:text-primary transition-colors font-medium">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
            Entrar
          </button>
          <button className="button-secondary">
            Comunidade
          </button>
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
            <a href="#recursos" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Recursos</a>
            <a href="#valores" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Nossos Valores</a>
            <a href="#equipe" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Nossa Equipe</a>
            <a href="#faq" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">FAQ</a>
            <hr className="border-neutral-200" />
            <button className="text-primary hover:text-primary/80 transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">
              Entrar
            </button>
            <button className="button-secondary w-full">
              Comunidade
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
