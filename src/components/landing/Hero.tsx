import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden h-screen">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/Pintointro.mp4"
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
        {/* Camada de sobreposição para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/50 z-1"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="container-padding py-12 relative z-10 h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.h1 
            className="heading-xl mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pinto Brasil DAO
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-8"
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
              <MessageCircle className="w-4 h-4" />
            </a>
            <a 
              href="#produtos"
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-white"
            >
              Conhecer Projetos
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;