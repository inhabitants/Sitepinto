import React from 'react';
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
      answer: "A Pinto Brasil DAO é uma comunidade brasileira Web3 baseada nos princípios de DAO (Decentralized Autonomous Organization), criada por brasileiros e para falantes do português. Nossa missão é criar uma comunidade acessível e funcional para acelerar a curva de aprendizado dos membros na Web3, desde a caça de oportunidades iniciais como airdrops até a expansão do conhecimento para modelos mais avançados no ecossistema e criação de ferramentas e produtos próprios."
    },
    {
      question: "Como é estruturada a Pinto Brasil DAO?",
      answer: "A DAO é visualizada como um vilarejo com 4 níveis principais: 1) Caçadores e Coletores: Especialistas em identificar oportunidades como drops, whitelists e farms; 2) Agricultura: Estudos avançados através de researchs e aulas para loops de rendimento; 3) Ferraria: Laboratório colaborativo para construção de ferramentas e produtos; 4) Exploratório: Pesquisa e experimentação de tecnologias em alfa, construindo soluções inovadoras."
    },
    {
      question: "Quais são as formas de participação na DAO?",
      answer: "Existem várias categorias de membros: 1) Member Premium (20M tokens Helen depositados); 2) Holder de Pinto (possui NFT Pinto); 3) Associate (50M tokens Helen); 4) Partner (200M tokens Helen). Cada categoria oferece benefícios específicos, como acesso a áreas exclusivas do Discord, participação em Deworks pagos e rewards."
    },
    {
      question: "Como funciona o sistema de pesos na DAO?",
      answer: "O sistema de pesos determina sua participação em premiações e votações. Os pesos são distribuídos da seguinte forma: NFTs Pinto (1º NFT = +1, 2º NFT = +2), Premium Anual (+2), Associate (+4), Partner (+6), Core Member (+4). Os pesos são acumulativos e utilizados para cálculo de chances em sorteios e força em votações."
    },
    {
      question: "Quem são os callers e como funcionam as calls?",
      answer: "A comunidade conta com especialistas em diferentes áreas como IA, DeFi, GameFi, e várias blockchains. As calls são compartilhadas em canais específicos, focando em oportunidades early-stage e análises técnicas. É importante lembrar que cada membro deve fazer sua própria pesquisa (DYOR) e que as calls são educativas, não recomendações de investimento."
    },
    {
      question: "Como a DAO gera e distribui rendimentos?",
      answer: "A DAO possui múltiplas fontes de rendimento: Produtos e Serviços (HelenAI), Tesouro Ativo (farming, staking), SubDAOs, Parcerias e NFTs/Tokens. A distribuição é feita entre Core Team, Despesas Operacionais, Comunidade e Tesouro de Reserva, seguindo um modelo sustentável."
    },
    {
      question: "O que são as SubDAOs?",
      answer: "São subdivisões especializadas com autonomia executiva, limitadas a 1-9 membros cada. Incluem: HelenAI SubDAO (70% dos lucros), Merch SubDAO (70%), Comunicação SubDAO (75%), AI Factory SubDAO (90%) e Community Pools SubDAO (90%). Cada SubDAO tem seu foco específico e modelo de distribuição de lucros."
    },
    {
      question: "O que é a HelenAI?",
      answer: "HelenAI é uma agente de IA projetada como participante das operações da Pinto DAO. Ela possui identidade própria, serve como interface experimental entre tecnologia e comunidade, atua como centro de informações humanizado e plataforma de experimentação e desenvolvimento."
    },
    {
      question: "Como posso verificar meu NFT e acompanhar atualizações?",
      answer: "Para verificar seu NFT, acesse o canal 'nft-verify' no Discord e siga o processo. Para atualizações, acompanhe os canais #anuncios e #anuncios-premium, participe dos canais de voz e siga as salas específicas de seu interesse. A plataforma de cards de tarefas também mostra a evolução da comunidade."
    },
    {
      question: "Como são tomadas as decisões na DAO?",
      answer: "As decisões são tomadas através de consultas à comunidade, votações para decisões importantes e votações onchain para decisões em forte embate. O peso de cada membro nas votações é determinado por seu sistema de pesos na DAO."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-100">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            FAQ
          </span>
          <h2 className="heading-lg mt-6">Perguntas Frequentes</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Pinto Brasil DAO e como fazer parte da nossa comunidade.
          </p>
          <p className="text-sm text-neutral-500 mt-2 max-w-2xl mx-auto">
            Para informações mais detalhadas, consulte nosso{" "}
            <a 
              href="https://docs.pinto.wtf/docs/FAQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-purple hover:underline"
            >
              FAQ completo
            </a>
            {" "}e{" "}
            <a 
              href="https://docs.pinto.wtf/docs/intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-purple hover:underline"
            >
              White Paper
            </a>
            .
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
