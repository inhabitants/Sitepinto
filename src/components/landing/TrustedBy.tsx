import React from 'react';

const TrustedBy = () => {
  const companies = [
    { 
      name: "Lush", 
      className: "w-48",
      imageUrl: "/Lushlogo.png",
      link: "https://exchange.lushai.net/trade/80472625-fc31-406d-bb2e-2aaa3ccfedd1",
      target: "_blank"

    },
    { 
      name: "SpellBorne", 
      className: "w-48",
      imageUrl: "/Spellborne-logo.png",
      link: "https://spellborne.wiki/skins",
      target: "_blank"
    },

    { 
      name: "Kgen", 
      className: "w-48",
      imageUrl: "/Kgen-logo.png",
      link: "https://bit.ly/KGeNPintoBrasilPOG",
      target: "_blank"

    },
    { 
      name: "Blast", 
      className: "w-48",
      imageUrl: "/BlastLogo.svg",
      link: "https://opensea.io/collection/pintudo",
      target: "_blank"

    },
    
    { 
      name: "Rayls", 
      className: "w-48",
      imageUrl: "/Rayls_Logo.jpg",
      link: "https://x.com/PBrasilNFT/status/1891632500381974894", 
      target: "_blank"

    }

  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Pinto está presente em</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${company.className} h-8 flex items-center justify-center transition-opacity hover:opacity-80`}
            >
              <img 
                src={company.imageUrl}
                alt={`${company.name} logo`}
                className="h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;