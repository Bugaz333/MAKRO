import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MakroMSymbol } from './MakroLogo';

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroShowcases = [
    {
      title: 'Delice // Display de Balcão PDV',
      subtitle: 'Embalagem Display Expositora em Cartão Duplex com Faca Especial',
      image: '/products/delice-display-box.jpg',
      tag: 'PRODUÇÃO REAL // DELICE',
      accentColor: '#FFED00',
    },
    {
      title: 'Mococa // Mistura Láctea 2,5kg',
      subtitle: 'Embalagem Flexível Pouch Industrial com Impressão de Alta Barreira',
      image: '/products/mococa-mistura-lactea.jpg',
      tag: 'PRODUÇÃO REAL // MOCOCA',
      accentColor: '#009FE3',
    },
    {
      title: 'Bobinas de Rótulos & Etiquetas',
      subtitle: 'Meio-corte Rotativo para Rotulagem Automática Industrial',
      image: '/products/rotulos-bobinas-adesivas.jpg',
      tag: 'EDITORA POSITIVO & TÉCNICOS',
      accentColor: '#E6007E',
    },
    {
      title: 'Biba Alimentos // Rótulo Pote 500g',
      subtitle: 'Filme BOPP de Alta Fixação com Verniz Protetor contra Umidade',
      image: '/products/biba-pingo-de-leite.png',
      tag: 'PRODUÇÃO REAL // BIBA',
      accentColor: '#E32619',
    },
    {
      title: 'Biba // Catálogo Comercial Impresso',
      subtitle: 'Impressão Editorial Offset em Papel Couché com Fidelidade Máxima',
      image: '/products/biba-catalogo-impresso.jpg',
      tag: 'EDITORIAL // LINHA BIBA',
      accentColor: '#00A843',
    },
  ];

  return (
    <section className="relative w-full bg-[#001244] text-white border-b border-[#1A265E] overflow-hidden pt-8 sm:pt-14 pb-16 lg:pb-24">
      {/* Background oversized M watermark with subtle float animation */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-24 -bottom-28 opacity-10 pointer-events-none w-[500px] lg:w-[680px]"
      >
        <MakroMSymbol color="white" size={600} />
      </motion.div>

      {/* Subtle Registration Crosshairs in Corners */}
      <div className="absolute top-4 left-4 text-[#009FE3]/40 pointer-events-none hidden sm:block">
        <div className="reg-mark" />
      </div>
      <div className="absolute top-4 right-4 text-[#E6007E]/40 pointer-events-none hidden sm:block">
        <div className="reg-mark" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/15 pb-4 mb-8 sm:mb-12 font-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[#A0B0E0]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#009FE3] inline-block animate-ping" />
            <span className="text-white font-bold">MAKRO IMPRESS // IDENTIDADE OFICIAL</span>
            <span>/</span>
            <span className="text-[#009FE3]">DE QUEM NASCEU NA GRÁFICA, MAS PENSA COMO MARCA</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-[#FFED00] font-bold">4 DÉCADAS DE EXPERIÊNCIA</span>
            <span>•</span>
            <span>OFFSET &amp; DIGITAL HIGH-END</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Monumental Headline & Core Message */}
          <div className="lg:col-span-7 space-y-8">
            {/* The 4 Personality Badges from Page 1 */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-white/10 text-white font-mono text-[11px] uppercase tracking-wider font-semibold border border-white/20">
                AMBICIOSA &amp; LOCAL
              </span>
              <span className="px-3 py-1 bg-[#009FE3] text-white font-mono text-[11px] uppercase tracking-wider font-semibold">
                AMIGÁVEL &amp; MODERNA
              </span>
              <span className="px-3 py-1 bg-[#E6007E] text-white font-mono text-[11px] uppercase tracking-wider font-semibold">
                CRIATIVA &amp; CONTEMPORÂNEA
              </span>
              <span className="px-3 py-1 bg-[#FFED00] text-[#0A0B0E] font-mono text-[11px] uppercase tracking-wider font-bold">
                EXPERIENTE &amp; CLEAN
              </span>
            </div>

            {/* Monumental Headline */}
            <div>
              <h1 className="text-[42px] sm:text-[64px] lg:text-[76px] xl:text-[86px] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]">
                Impressão <br />
                que dá forma <br />
                <span className="text-[#009FE3]">à sua marca.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="max-w-xl text-[18px] sm:text-[21px] text-[#D0D8F0] font-normal leading-relaxed">
              Soluções gráficas e personalização para marcas que querem ser
              vistas, lembradas e reconhecidas. Técnica milimétrica, acabamentos
              nobres e atendimento consultivo.
            </p>

            {/* Action Buttons: High Contrast, Fluid Springs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6007E] text-white text-[14px] font-extrabold tracking-tight uppercase hover:bg-white hover:text-[#001244] transition-colors duration-200 shadow-xl"
              >
                Solicite um orçamento &rarr;
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#solucoes"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white text-[14px] font-extrabold tracking-tight uppercase hover:bg-white hover:text-[#001244] transition-colors duration-200"
              >
                Conheça nossos serviços
              </motion.a>
            </div>

            {/* Metric Proof Bar */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/15 pt-6 text-left">
              <div>
                <span className="font-mono text-[11px] text-[#8090C0] uppercase block">
                  TRADIÇÃO
                </span>
                <span className="font-sans text-[22px] sm:text-[28px] font-extrabold text-[#FFED00]">
                  40+ Anos
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#8090C0] uppercase block">
                  CAPACIDADE
                </span>
                <span className="font-sans text-[22px] sm:text-[28px] font-extrabold text-[#009FE3]">
                  Offset &amp; Digital
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#8090C0] uppercase block">
                  PRECISÃO
                </span>
                <span className="font-sans text-[22px] sm:text-[28px] font-extrabold text-[#E6007E]">
                  Delta E &lt; 1.5
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Giant M Cutout Frame with Live Product Showcase (Inspired by Page 13 & 17) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#050B24] border-2 border-[#1E2C6A] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Top Frame Bar */}
              <div className="flex items-center justify-between border-b border-[#202E66] pb-3 mb-4 font-mono text-[11px]">
                <span className="text-[#009FE3] font-bold">
                  {heroShowcases[activeSlide].tag}
                </span>
                <span className="text-[#8090B0]">
                  0{activeSlide + 1} / 0{heroShowcases.length}
                </span>
              </div>

              {/* Dynamic Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide}
                    src={heroShowcases[activeSlide].image}
                    alt={heroShowcases[activeSlide].title}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Corner Símbolo M cutout */}
                <div className="absolute bottom-3 right-3 p-2 bg-[#001244]/90 backdrop-blur-sm border border-white/20">
                  <MakroMSymbol color="cmyk" size={24} />
                </div>
              </div>

              {/* Slide Meta */}
              <div className="space-y-1 mb-4">
                <h3 className="text-[20px] font-extrabold uppercase text-white tracking-tight">
                  {heroShowcases[activeSlide].title}
                </h3>
                <p className="font-mono text-[12px] text-[#A0B0E0]">
                  {heroShowcases[activeSlide].subtitle}
                </p>
              </div>

              {/* Slide Selector Buttons */}
              <div className="flex items-center justify-between border-t border-[#202E66] pt-3">
                <div className="flex items-center gap-2">
                  {heroShowcases.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 transition-all ${
                        activeSlide === idx
                          ? 'w-8 bg-[#E6007E]'
                          : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((prev) =>
                        prev === 0 ? heroShowcases.length - 1 : prev - 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#001244] transition-colors font-mono text-[13px]"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((prev) =>
                        prev === heroShowcases.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#001244] transition-colors font-mono text-[13px]"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
