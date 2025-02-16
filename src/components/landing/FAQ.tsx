import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é a Pinto Brasil DAO?",
      answer: "A Pinto Brasil DAO é uma Organização Autônoma Descentralizada (DAO) focada na criação e inovação de conteúdo digital. Nossa missão é unir criadores, desenvolvedores e entusiastas da Web3 para explorar novas oportunidades e colaborar em projetos que impactem a comunidade."
    },
    {
      question: "Como posso participar da DAO?",
      answer: "Para participar da Pinto Brasil DAO, você pode começar entrando em nosso servidor Discord. Lá, você poderá interagir com outros membros, discutir ideias, votar em propostas e colaborar em projetos. Além disso, você pode se inscrever em nossas newsletters e acompanhar nossas redes sociais para ficar por dentro das novidades."
    },
    {
      question: "Quem é a HelenAI?",
      answer: "HelenAI é nossa agente de inteligência artificial especializada em criar histórias em quadrinhos e outros conteúdos criativos. Ela combina algoritmos avançados de aprendizado de máquina com narrativas envolventes para produzir conteúdo original e inovador. A HelenAI é uma parte fundamental da nossa comunidade, ajudando a expandir as possibilidades criativas."
    },
    {
      question: "Quais são os benefícios de ser membro da Pinto Brasil DAO?",
      answer: "Como membro da Pinto Brasil DAO, você terá acesso a uma variedade de benefícios, incluindo: Conteúdo Exclusivo, Direito a Voto, Participação nos Lucros e Networking com outros criadores."
    },
    {
      question: "Como funciona a governança na Pinto Brasil DAO?",
      answer: "A governança da Pinto Brasil DAO é baseada em um sistema de votação onde todos os membros têm voz. As propostas são apresentadas e discutidas na comunidade, e os membros podem votar para aprovar ou rejeitar as iniciativas. Isso garante que todos tenham a oportunidade de influenciar a direção da DAO."
    },
    {
      question: "Quais tipos de projetos a Pinto Brasil DAO apoia?",
      answer: "A Pinto Brasil DAO apoia uma ampla gama de projetos relacionados à criação de conteúdo digital, desenvolvimento de ferramentas para a comunidade, pesquisa em tecnologias emergentes e iniciativas educacionais. Estamos sempre abertos a novas ideias e colaborações."
    },
    {
      question: "Como posso contribuir para a Pinto Brasil DAO?",
      answer: "Existem várias maneiras de contribuir para a Pinto Brasil DAO: Participação Ativa, Propostas de Projetos, Colaboração e Compartilhamento de Conhecimento."
    },
    {
      question: "Onde posso encontrar mais informações sobre a Pinto Brasil DAO?",
      answer: "Para mais informações, você pode visitar nosso site oficial, onde disponibilizamos documentos, guias e atualizações sobre a DAO. Além disso, siga-nos nas redes sociais e entre no nosso Discord para interagir com a comunidade."
    },
    {
      question: "Como a Pinto Brasil DAO lida com a privacidade e segurança dos dados?",
      answer: "Levamos a privacidade e segurança dos dados muito a sério. Implementamos práticas de segurança robustas e seguimos as melhores diretrizes para proteger as informações dos nossos membros. Para mais detalhes, consulte nossa política de privacidade disponível em nosso site."
    },
    {
      question: "Como posso entrar em contato com a Pinto Brasil DAO?",
      answer: "Você pode entrar em contato conosco através do nosso servidor Discord, onde temos canais dedicados para perguntas e feedback. Também estamos disponíveis por e-mail e nas redes sociais."
    }
  ];

  return (
    <section className="py-24 bg-neutral-100">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            FAQ
          </span>
          <h2 className="heading-lg mt-6">Perguntas Frequentes</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Pinto Brasil DAO e como fazer parte da nossa comunidade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:text-accent-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
