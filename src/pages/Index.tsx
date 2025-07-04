import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Values from "@/components/landing/Values";
import Products from "@/components/landing/Products";
import Projects from "@/components/landing/Projects";
import VillageStructure from "@/components/landing/VillageStructure";
import Team from "@/components/landing/Team";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Tokens from "@/components/landing/Tokens";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <Hero />
      <TrustedBy />
      <div id="recursos">
        <Features />
      </div>
      <div id="valores">
        <Values />
      </div>
      <div id="produtos">
        <Projects />
      </div>
      <div id="tokens">
        <Tokens />
      </div>
      <div id="servicos">
        <Products />
      </div>
      <div id="estrutura">
        <VillageStructure />
      </div>
      <div id="equipe">
        <Team />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
