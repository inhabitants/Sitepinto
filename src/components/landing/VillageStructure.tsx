import React from 'react';
import VillageFlow from './village-structure/VillageFlow';
import { ArrowRight } from 'lucide-react';

const VillageStructure = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            ESTRUTURA DO VILAREJO PINTO
          </span>
          <h2 className="heading-lg mt-6">Como nos organizamos</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Nossa comunidade é estruturada em níveis que se complementam e evoluem juntos
          </p>
        </div>
        
        <VillageFlow />

        {/* Botão Saber Mais */}
        <div className="mt-12 text-center">
          <a 
            href="https://docs.pinto.wtf/docs/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-colors"
          >
            Entenda nossa Estrutura
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VillageStructure;
