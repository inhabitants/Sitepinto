import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="container-padding py-12">
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.h1 
          className="heading-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pinto Brasil DAO
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Se dizem que o brasileiro não desiste nunca, imagine quando a gente se junta para caçar e criar em conjunto amplificados por IA
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://discord.pinto.wtf" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex items-center gap-2"
          >
            Entrar na Comunidade
          </a>
          <a 
            href="https://helenai.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-200/50 transition-colors"
          >
            Conhecer HelenAI
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;