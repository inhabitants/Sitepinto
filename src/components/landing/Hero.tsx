import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Adia o vídeo de fundo (pesado) até a página ficar ociosa, pra não
    // competir com o LCP / primeira renderização.
    const start = () => setVideoSrc('/Pintointro.mp4');
    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(start, { timeout: 2000 });
      } else {
        window.setTimeout(start, 300);
      }
    };
    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
      return () => window.removeEventListener('load', schedule);
    }
  }, []);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  return (
    <header className="relative overflow-hidden h-screen">
      {/* Vídeo de fundo (lazy) — fundo preto pinta na hora, vídeo entra depois com fade */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onPlaying={() => setReady(true)}
          src={videoSrc}
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