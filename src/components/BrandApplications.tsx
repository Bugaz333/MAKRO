import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MakroMSymbol } from './MakroLogo';

export const BrandApplications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'posters' | 'identity' | 'environment'>('all');

  const items = [
    {
      id: 'mupis',
      type: 'posters',
      title: 'Tríptico de Cartazes Urbanos',
      subtitle: 'Campanha de Rua — São Paulo',
      tag: 'MUPIS & MOBILIÁRIO URBANO',
      headline: 'Quatro décadas de experiência, agora com uma nova cor.',
      bg: 'bg-[#FFED00]',
      textColor: 'text-[#0A0B0E]',
      desc: 'Série de três cartazes concebidos para comunicação externa explorando as cores chapadas e os novos manifestos institucionais.',
      colSpan: 'lg:col-span-8',
      preview: 'posters',
    },
    {
      id: 'cards',
      type: 'identity',
      title: 'Cartões com Borda Pintada',
      subtitle: 'Papelaria Institucional de Luxo',
      tag: 'PAPEL ALGODÃO 600G',
      headline: 'Fita & Acabamento Color Edge',
      bg: 'bg-[#001244]',
      textColor: 'text-white',
      desc: 'Cartões de visita empastados com núcleo colorido em Cyan, Magenta e Amarelo com gravação em baixo-relevo seco.',
      colSpan: 'lg:col-span-4',
      preview: 'cards',
    },
    {
      id: 'sign',
      type: 'environment',
      title: 'Sinalização em Acrílico & Metal',
      subtitle: 'Fachada & Blade Sign',
      tag: 'COMUNICAÇÃO VISUAL',
      headline: 'Presença Física Arquitetônica',
      bg: 'bg-[#E6007E]',
      textColor: 'text-white',
      desc: 'Totem e blade sign projetado para fachadas com acrílico cristal retroiluminado e recorte milimétrico do glifo M.',
      colSpan: 'lg:col-span-4',
      preview: 'sign',
    },
    {
      id: 'van',
      type: 'environment',
      title: 'Frota de Logística Personalizada',
      subtitle: 'Envelopamento de Veículos',
      tag: 'LOGÍSTICA & FROTA',
      headline: 'Sua marca sempre precisou de personalização',
      bg: 'bg-[#0A0B0E]',
      textColor: 'text-white',
      desc: 'Envelopamento premium com janelas no formato do M revelando os produtos impressos em circulação diária.',
      colSpan: 'lg:col-span-8',
      preview: 'van',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.type === activeFilter);

  return (
    <section className="w-full bg-[#FBFBFA] border-b border-[#E5E5E0] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0B0E] pb-6 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full border border-[#0A0B0E] font-mono text-[11px] uppercase tracking-wider text-[#0A0B0E] font-bold">
                Aplicações
              </span>
              <span className="font-mono text-[11px] uppercase text-[#666872] tracking-wider">
                UNIVERSO EXPANDIDO // MAKRO IMPRESS
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              A marca em ação, <br />
              <span className="text-[#001244]">no mundo real.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Ver Tudo' },
              { id: 'posters', label: 'Cartazes & Mupis' },
              { id: 'identity', label: 'Papelaria & Luxo' },
              { id: 'environment', label: 'Espaço & Frota' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-[12px] font-mono uppercase tracking-wider font-bold border transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#001244] text-white border-[#001244]'
                    : 'bg-white text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredItems.map((app) => (
            <motion.div
              layout
              key={app.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`${app.colSpan} border border-[#0A0B0E] flex flex-col justify-between overflow-hidden group`}
            >
              {/* Graphic Mockup Preview Window */}
              <div className={`p-8 sm:p-12 ${app.bg} ${app.textColor} relative min-h-[300px] flex flex-col justify-between`}>
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'currentColor', opacity: 0.3 }}>
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">
                    {app.tag}
                  </span>
                  <span className="font-mono text-[10px]">
                    MAKRO SPEC 2026
                  </span>
                </div>

                {/* Center Content based on Preview Type */}
                <div className="my-8">
                  {app.preview === 'posters' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-[#FFED00] p-4 border border-[#0A0B0E] text-[#0A0B0E] space-y-2">
                        <span className="font-mono text-[9px] block">01 // POSTER</span>
                        <p className="font-sans font-extrabold text-[15px] uppercase leading-tight">
                          Sua marca sempre precisou de personalização
                        </p>
                      </div>
                      <div className="bg-[#009FE3] p-4 border border-[#0A0B0E] text-white space-y-2">
                        <span className="font-mono text-[9px] block">02 // POSTER</span>
                        <p className="font-sans font-extrabold text-[15px] uppercase leading-tight text-[#FFED00]">
                          Quatro décadas de experiência, agora com uma nova cor
                        </p>
                      </div>
                      <div className="bg-[#0A0B0E] p-4 border border-white/20 text-white space-y-2">
                        <span className="font-mono text-[9px] block">03 // POSTER</span>
                        <p className="font-sans font-extrabold text-[15px] uppercase leading-tight">
                          De quem nasceu na gráfica... mas pensa como marca.
                        </p>
                      </div>
                    </div>
                  )}

                  {app.preview === 'cards' && (
                    <div className="flex items-center justify-center py-6">
                      <div className="w-[200px] aspect-[1.75/1] bg-white text-[#0A0B0E] p-5 shadow-2xl border-r-4 border-b-4 border-[#E6007E] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                          <MakroMSymbol color="cmyk" size={24} />
                          <span className="text-[8px] font-mono">600G</span>
                        </div>
                        <p className="font-sans font-extrabold text-[13px] lowercase mt-3">
                          makro&reg; impress
                        </p>
                        <p className="font-mono text-[8px] text-[#666]">
                          borda colorida magenta
                        </p>
                      </div>
                    </div>
                  )}

                  {app.preview === 'sign' && (
                    <div className="flex items-center justify-center py-6">
                      <div className="bg-white text-[#0A0B0E] p-6 border-2 border-black shadow-2xl flex items-center gap-4">
                        <MakroMSymbol color="magenta" size={48} />
                        <div>
                          <p className="font-sans font-extrabold text-[18px] uppercase tracking-tight">
                            Makro Impress
                          </p>
                          <p className="font-mono text-[10px] text-[#666]">
                            Parque Gráfico &amp; Atendimento
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {app.preview === 'van' && (
                    <div className="flex items-center justify-between py-4">
                      <div className="space-y-2">
                        <h4 className="text-[28px] sm:text-[34px] font-extrabold uppercase tracking-tight text-white leading-tight">
                          Logística Ágil em Todo o Brasil
                        </h4>
                        <p className="font-mono text-[12px] text-[#009FE3]">
                          EXPEDIÇÃO RASTREADA COM EMBALAGEM CLIMATIZADA
                        </p>
                      </div>
                      <div className="hidden sm:block opacity-40">
                        <MakroMSymbol color="white" size={100} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t pt-3 flex items-center justify-between font-mono text-[10px]" style={{ borderColor: 'currentColor', opacity: 0.4 }}>
                  <span>SISTEMA DE IDENTIDADE // 2026</span>
                  <span>AUTORAL</span>
                </div>
              </div>

              {/* Bottom Caption and Detail */}
              <div className="p-6 bg-white flex flex-col justify-between flex-1 space-y-2">
                <div>
                  <h3 className="text-[19px] font-extrabold uppercase tracking-tight text-[#0A0B0E]">
                    {app.title}
                  </h3>
                  <p className="text-[14px] text-[#555760] leading-relaxed mt-1">
                    {app.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5E5E0] flex items-center justify-between text-[11px] font-mono text-[#001244] font-bold">
                  <span>{app.subtitle}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Explorar &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandApplications;
