
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Values from "@/components/landing/Values";
import Team from "@/components/landing/Team";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <Values />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
