const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <span className="text-xl font-semibold">Pinto Brasil</span>
            </div>
            <p className="text-neutral-600 text-sm">
              DAO de Inovação em Conteúdo Digital
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-primary transition-colors">HelenAI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">DAO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Licença</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © 2024 Pinto Brasil DAO. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
              Discord
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;