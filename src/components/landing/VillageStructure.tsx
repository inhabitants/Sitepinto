
import VillageFlow from './village-structure/VillageFlow';

const VillageStructure = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            ESTRUTURA DO VILAREJO
          </span>
          <h2 className="heading-lg mt-6">Como nos organizamos</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Nossa comunidade é estruturada em níveis que se complementam e evoluem juntos
          </p>
        </div>
        
        <VillageFlow />
      </div>
    </section>
  );
};

export default VillageStructure;
