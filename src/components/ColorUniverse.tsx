import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MakroMSymbol } from './MakroLogo';

interface ColorSpec {
  name: string;
  category: 'Principal' | 'Secundária' | 'Neutra';
  hex: string;
  cmyk: string;
  textColor: string;
  contrastWith: string[];
  role: string;
}

const colorSystem: ColorSpec[] = [
  {
    name: 'Azul Makro',
    category: 'Principal',
    hex: '#001244',
    cmyk: 'C:100 M:88 Y:30 K:50',
    textColor: '#FFFFFF',
    contrastWith: ['#FFED00', '#009FE3', '#E6007E', '#FFFFFF'],
    role: 'Simboliza equilíbrio, técnica e presença. Base estrutural da identidade.',
  },
  {
    name: 'Magenta',
    category: 'Principal',
    hex: '#E6007E',
    cmyk: 'C:0 M:100 Y:0 K:0',
    textColor: '#FFFFFF',
    contrastWith: ['#001244', '#0A0B0E', '#FFED00', '#FFFFFF'],
    role: 'Vibrante, expressiva e ligada à personalização e acabamentos especiais.',
  },
  {
    name: 'Ciano',
    category: 'Principal',
    hex: '#009FE3',
    cmyk: 'C:100 M:0 Y:0 K:0',
    textColor: '#FFFFFF',
    contrastWith: ['#001244', '#0A0B0E', '#FFED00'],
    role: 'Cor primária clássica do universo gráfico, representando clareza e tecnologia.',
  },
  {
    name: 'Amarelo Processo',
    category: 'Secundária',
    hex: '#FFED00',
    cmyk: 'C:0 M:0 Y:100 K:0',
    textColor: '#0A0B0E',
    contrastWith: ['#001244', '#0A0B0E', '#E6007E'],
    role: 'Luminosidade gráfica, usada em blocos pontuais de impacto e marcadores.',
  },
  {
    name: 'Vermelho',
    category: 'Secundária',
    hex: '#E32619',
    cmyk: 'C:0 M:95 Y:100 K:0',
    textColor: '#FFFFFF',
    contrastWith: ['#001244', '#FFFFFF', '#0A0B0E'],
    role: 'Aparece em mesclas que pedem maior profundidade, contraste e dinamismo.',
  },
  {
    name: 'Verde',
    category: 'Secundária',
    hex: '#00A843',
    cmyk: 'C:85 M:0 Y:100 K:0',
    textColor: '#FFFFFF',
    contrastWith: ['#001244', '#0A0B0E', '#FFFFFF'],
    role: 'Formada pela fusão do ciano e amarelo, reforçando versatilidade de substratos.',
  },
  {
    name: 'Preto Tipográfico',
    category: 'Neutra',
    hex: '#0A0B0E',
    cmyk: 'C:70 M:60 Y:60 K:100',
    textColor: '#FFFFFF',
    contrastWith: ['#FFED00', '#009FE3', '#E6007E', '#FFFFFF'],
    role: 'Rich black denso para alta legibilidade editorial e contrastes profundos.',
  },
  {
    name: 'Branco Papel',
    category: 'Neutra',
    hex: '#FFFFFF',
    cmyk: 'C:0 M:0 Y:0 K:0',
    textColor: '#0A0B0E',
    contrastWith: ['#001244', '#E6007E', '#0A0B0E'],
    role: 'O substrato original. Espaço negativo que garante respiro e elegância.',
  },
];

export const ColorUniverse: React.FC = () => {
  const [activeColor, setActiveColor] = useState<ColorSpec>(colorSystem[0]);

  return (
    <section className="w-full bg-[#0A0B0E] text-white border-b border-[#22242B] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Badge & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#22242B] pb-6 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full border border-white/20 font-mono text-[11px] uppercase tracking-wider text-white font-bold">
                Cores
              </span>
              <span className="font-mono text-[11px] uppercase text-[#A0A0AA] tracking-wider">
                SISTEMA CROMÁTICO &amp; CONTRASTES
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[52px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-white">
              É clássico, <br />
              <span className="text-[#009FE3]">mas nem tanto.</span>
            </h2>
          </div>

          <p className="max-w-md text-[15px] sm:text-[16px] text-[#A0A0A8] leading-relaxed">
            Nossa paleta foi pensada para conectar e diferenciar. Ela parte das
            cores clássicas do universo gráfico e ganha personalidade ao
            explorar as mesclas, representando o próprio processo de impressão.
          </p>
        </div>

        {/* Interactive Palette Grid & Live Mockup Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Swatches Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {colorSystem.map((color) => {
                const isSelected = activeColor.name === color.name;
                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setActiveColor(color)}
                    className={`p-4 text-left border transition-all duration-300 relative group ${
                      isSelected
                        ? 'border-white scale-[1.02] shadow-xl'
                        : 'border-[#22242B] hover:border-white/40'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <span
                        className="font-mono text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5"
                        style={{
                          backgroundColor:
                            color.textColor === '#FFFFFF'
                              ? 'rgba(0,0,0,0.4)'
                              : 'rgba(255,255,255,0.8)',
                          color: color.textColor,
                        }}
                      >
                        {color.category}
                      </span>
                      {isSelected && (
                        <span
                          className="w-2.5 h-2.5 rounded-full animate-ping"
                          style={{
                            backgroundColor:
                              color.textColor === '#FFFFFF' ? '#FFED00' : '#001244',
                          }}
                        />
                      )}
                    </div>

                    <div>
                      <p
                        className="font-sans font-extrabold text-[15px] leading-tight"
                        style={{ color: color.textColor }}
                      >
                        {color.name}
                      </p>
                      <p
                        className="font-mono text-[11px] opacity-80 mt-1"
                        style={{ color: color.textColor }}
                      >
                        {color.hex}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanatory Technical Box for Active Color */}
            <div className="p-6 sm:p-8 bg-[#13151D] border border-[#22242B] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#22242B] pb-4">
                <div>
                  <span className="font-mono text-[11px] text-[#009FE3] uppercase tracking-wider block">
                    COR SELECIONADA
                  </span>
                  <h3 className="text-[22px] font-extrabold uppercase text-white">
                    {activeColor.name}
                  </h3>
                </div>
                <div className="flex items-center gap-6 font-mono text-[12px]">
                  <div>
                    <span className="text-[#666872] block text-[10px]">CMYK</span>
                    <span className="text-[#FFED00] font-bold">{activeColor.cmyk}</span>
                  </div>
                  <div>
                    <span className="text-[#666872] block text-[10px]">HEX</span>
                    <span className="text-white font-bold">{activeColor.hex}</span>
                  </div>
                </div>
              </div>

              <p className="text-[14px] text-[#D0D4E4] leading-relaxed">
                {activeColor.role}
              </p>

              {/* Contrast Bar like Page 5 */}
              <div className="pt-2">
                <span className="font-mono text-[11px] text-[#666872] uppercase tracking-wider block mb-2">
                  Harmonizações e contrastes recomendados na identidade:
                </span>
                <div className="flex items-center gap-2">
                  {activeColor.contrastWith.map((cHex, i) => (
                    <div
                      key={i}
                      className="w-10 h-6 border border-white/20 flex items-center justify-center text-[9px] font-mono font-bold"
                      style={{ backgroundColor: cHex, color: cHex === '#FFFFFF' || cHex === '#FFED00' ? '#000' : '#FFF' }}
                    >
                      AA
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Mockup Card Transforming with the Color */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColor.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex-1 p-8 sm:p-12 border border-[#22242B] flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: activeColor.hex }}
              >
                {/* Top Mockup Header */}
                <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: activeColor.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)' }}>
                  <span
                    className="font-mono text-[11px] uppercase tracking-wider font-bold"
                    style={{ color: activeColor.textColor }}
                  >
                    APLICAÇÃO DE COR EM TEMPO REAL
                  </span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: activeColor.textColor, opacity: 0.8 }}
                  >
                    PROVA DIGITAL
                  </span>
                </div>

                {/* Center Dynamic Brand Mark */}
                <div className="my-12 flex flex-col items-center justify-center text-center">
                  <div className="w-[180px] sm:w-[220px] drop-shadow-2xl">
                    <MakroMSymbol
                      color={activeColor.name === 'Azul Makro' ? 'white' : activeColor.name === 'Magenta' ? 'navy' : 'cmyk'}
                      size={180}
                    />
                  </div>
                  <div className="mt-6">
                    <span
                      className="font-sans font-extrabold text-[28px] tracking-tight lowercase block"
                      style={{ color: activeColor.textColor }}
                    >
                      makro&reg; impress
                    </span>
                    <span
                      className="font-mono text-[12px] uppercase tracking-wider mt-1 block"
                      style={{ color: activeColor.textColor, opacity: 0.85 }}
                    >
                      Personalização sem limites
                    </span>
                  </div>
                </div>

                {/* Bottom Mockup Specs */}
                <div
                  className="border-t pt-4 flex items-center justify-between font-mono text-[11px]"
                  style={{
                    borderColor: activeColor.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                    color: activeColor.textColor,
                  }}
                >
                  <span>CALIBRAÇÃO COLORÍMETRICA</span>
                  <span className="font-bold">DELTA E &lt; 1.5</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorUniverse;
