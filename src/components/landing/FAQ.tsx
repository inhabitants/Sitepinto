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
      answer: "A Pinto Brasil DAO é uma organização autônoma descentralizada focada na criação de conteúdo digital inovador, com destaque para a HelenAI, nossa agente escritora de histórias em quadrinhos."
    },
    {
      question: "Como posso participar da DAO?",
      answer: "Para participar da nossa DAO, você pode começar entrando em nosso servidor Discord, onde nossa comunidade se reúne para discutir ideias, votar em propostas e colaborar em projetos."
    },
    {
      question: "Quem é a HelenAI?",
      answer: "HelenAI é nossa agente de IA especializada em criar histórias em quadrinhos únicas. Ela combina criatividade artificial com narrativas envolventes para produzir conteúdo original."
    },
    {
      question: "Quais são os benefícios de ser membro?",
      answer: "Como membro, você terá acesso a conteúdo exclusivo, direito a voto em decisões importantes da DAO, participação nos lucros gerados pelos projetos e networking com outros criadores."
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