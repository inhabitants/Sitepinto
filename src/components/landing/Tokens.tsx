import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Copy, Check } from "lucide-react";

const Tokens = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const tokenAddress = "0x174f6a1286c0be66c83531368113cbf95faf17c6";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokens = [
    {
      name: "Helen Token",
      description: "Token central da comunidade, utilizado para governança e benefícios exclusivos.",
      image: "/Helentoken.png",
      link: "https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x174f6a1286C0be66C83531368113cBF95FAf17C6",
      buttonText: "Ver na Uniswap",
      hasWidget: true
    },
    {
      name: "Pinto NFT",
      description: "Coleção de NFT central da comunidade, que garante acesso vitalício e benefícios exclusivos aos holders.",
      image: "/Pintobase.png",
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
            A comunidade só pode ser acessada através de um dos tokens abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tokens.map((token) => (
            <div 
              key={token.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6 overflow-hidden rounded-full group">
                  <img 
                    src={token.image}
                    alt={token.name}
                    className="w-full h-full object-contain rounded-full ring-4 ring-accent-purple/20 group-hover:ring-accent-purple/60 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {token.name}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {token.description}
                </p>
                {token.hasWidget ? (
                  <>
                    {/* Modal Uniswap */}
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                      <DialogTrigger asChild>
                        <button 
                          className="px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-all duration-200 font-medium tracking-wide shadow-sm hover:shadow-md w-full inline-block text-center cursor-pointer"
                        >
                          {token.buttonText}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Comprar Helen Token</DialogTitle>
                        </DialogHeader>
                        <div className="bg-neutral-100 p-3 rounded-md flex items-center justify-between mb-4">
                          <div className="text-sm font-mono text-neutral-600 overflow-hidden text-ellipsis">
                            {tokenAddress}
                          </div>
                          <button 
                            onClick={copyToClipboard}
                            className="p-1.5 bg-accent-purple/10 rounded-md hover:bg-accent-purple/20 transition-colors"
                          >
                            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-accent-purple" />}
                          </button>
                        </div>
                        <div className="w-full h-[500px] bg-white rounded-lg overflow-hidden">
                          <iframe
                            src="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x174f6a1286C0be66C83531368113cBF95FAf17C6"
                            className="w-full h-full border-0"
                            title="Uniswap Widget"
                            allow="clipboard-write; camera; microphone; geolocation"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation"
                          />
                        </div>
                        <div className="mt-4">
                          <a 
                            href={token.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-all duration-200 font-medium tracking-wide shadow-sm hover:shadow-md w-full inline-flex items-center justify-center gap-2 cursor-pointer"
                          >
                            Abrir na Uniswap
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </>
                ) : (
                  <a 
                    href={token.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-all duration-200 font-medium tracking-wide shadow-sm hover:shadow-md w-full inline-block text-center cursor-pointer"
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