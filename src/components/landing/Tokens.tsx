import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Tokens = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tokens = [
    {
      name: "Helen Token",
      description: "Token central da comunidade, utilizado para governança e benefícios exclusivos.",
      image: "/HelenToken.png",
      link: "https://app.uniswap.org/swap?outputCurrency=0x174f6a1286c0be66c83531368113cbf95faf17c6",
      buttonText: "Comprar na Uniswap",
      hasWidget: true
    },
    {
      name: "Pinto NFT",
      description: "Coleção de NFT central da comunidade, que garante acesso vitalício e benefícios exclusivos aos holders.",
      image: "/PintoNFT.png",
      link: "https://opensea.io/collection/pintudo",
      buttonText: "Ver na OpenSea",
      hasWidget: false
    }
  ];

  return (
    <section id="tokens" className="py-24 bg-neutral-100">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            TOKENS
          </span>
          <h2 className="heading-lg mt-6">Acesso à Comunidade</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Nossa comunidade é fechada e só pode ser acessada através de um dos tokens abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tokens.map((token) => (
            <div 
              key={token.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6">
                  <img 
                    src={token.image}
                    alt={token.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {token.name}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {token.description}
                </p>
                {token.hasWidget ? (
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <Button className="button-primary w-full">
                        {token.buttonText}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Comprar Helen Token</DialogTitle>
                      </DialogHeader>
                      <div className="w-full h-[600px]">
                        <iframe
                          src="https://app.uniswap.org/swap?outputCurrency=0x174f6a1286c0be66c83531368113cbf95faf17c6"
                          className="w-full h-full border-0"
                          title="Uniswap Widget"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <a 
                    href={token.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary w-full"
                  >
                    {token.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokens; 