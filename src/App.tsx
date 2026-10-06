import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import BrandManifesto from './components/BrandManifesto';
import ColorUniverse from './components/ColorUniverse';
import SymbolVersatility from './components/SymbolVersatility';
import ManufacturedProducts from './components/ManufacturedProducts';
import BrandApplications from './components/BrandApplications';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PersonalizationAndProcess from './components/PersonalizationAndProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export const App: React.FC = () => {
  const handleOpenQuote = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#0A0B0E] selection:bg-[#E6007E] selection:text-white">
      {/* 1. Header with live technical bar, official Makro logo and navigation */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Monumental Typography, Interactive Product Showcase & 4 Brand Pillars */}
        <Hero />

        {/* 3. Kinetic Marquee Ticker: Bold Graphic Statements */}
        <MarqueeBanner />

        {/* 4. Brand Manifesto: "De quem nasceu na gráfica, mas pensa como marca" + Overlapping M Shapes */}
        <BrandManifesto />

        {/* 5. Color Universe: "É clássico, mas nem tanto" — Interactive CMYK & Brand Palette Explorer */}
        <div id="cores">
          <ColorUniverse />
        </div>

        {/* 6. Symbol Versatility: "Nosso Símbolo é nossa versatilidade" — 3D Box & Kraft Tape */}
        <SymbolVersatility />

        {/* 7. Produtos Fabricados Reais: Mococa, Biba, Delice, Itaiquara, Rótulos em Bobina */}
        <ManufacturedProducts />

        {/* 8. Brand Applications: Mupis, Cartões com Borda Colorida, Blade Sign, Van de Entrega */}
        <BrandApplications />

        {/* 8. Soluções Gráficas: 6 Categorias com Tabs Interativas e Especificações de Alta Fidelidade */}
        <ServicesSection />

        {/* 9. Portfólio Editorial: Grid Assimétrico com Filtros Fluidos e Fichas Técnicas */}
        <PortfolioSection />

        {/* 10. Personalização (Fundo Preto + Bloco Magenta) & Do Arquivo ao Impresso (5 Etapas Lineares) */}
        <PersonalizationAndProcess />

        {/* 11. Contato & Solicitação de Orçamento Direta com WhatsApp */}
        <ContactSection />
      </main>

      {/* 12. Footer Editorial Completo */}
      <Footer />
    </div>
  );
};

export default App;
