import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/Logo-Pinto-DAO.png" 
                alt="PintoDAOLogo" 
                className="w-16 h-auto object-contain"
              />
              <span className="text-xl font-semibold">Pinto Brasil DAO</span>
            </div>
            <p className="text-neutral-600 text-sm">
            Irreverência, experimentação e cooperação para além do alpha
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="https://helenai.wtf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">HelenAI</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Projetos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#recursos" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="https://discord.pinto.wtf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#estrutura" className="hover:text-primary transition-colors">Estrutura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="https://docs.pinto.wtf/docs/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="https://docs.pinto.wtf/docs/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Termos</a></li>
              <li><a href="https://docs.pinto.wtf/docs/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Licença</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © 2025 Pinto Brasil DAO. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://discord.pinto.wtf" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
              Discord
            </a>
            <a href="https://x.pinto.wtf" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;