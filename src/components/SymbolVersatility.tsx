import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MakroMSymbol } from './MakroLogo';

export const SymbolVersatility: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'box' | 'tape'>('box');

  return (
    <section className="w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Badge & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0B0E] pb-6 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full border border-[#0A0B0E] font-mono text-[11px] uppercase tracking-wider text-[#0A0B0E] font-bold">
                Símbolo
              </span>
              <span className="font-mono text-[11px] uppercase text-[#666872] tracking-wider">
                TRIDIMENSIONALIDADE &amp; EMBALAGEM
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              Nosso Símbolo é <br />
              <span className="text-[#001244]">nossa versatilidade.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-[16px] text-[#44464F] leading-relaxed">
              A forma do &ldquo;M&rdquo; vai além da letra: sugere estrutura, volume e
              tridimensionalidade, remetendo às embalagens e à materialidade do
              processo gráfico. É simples, mas carrega intenção.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('box')}
                className={`px-4 py-2 text-[12px] font-mono uppercase font-bold border transition-all ${
                  activeTab === 'box'
                    ? 'bg-[#001244] text-white border-[#001244]'
                    : 'bg-white text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                }`}
              >
                Caixa Estrutural M
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tape')}
                className={`px-4 py-2 text-[12px] font-mono uppercase font-bold border transition-all ${
                  activeTab === 'tape'
                    ? 'bg-[#E6007E] text-white border-[#E6007E]'
                    : 'bg-white text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                }`}
              >
                Fita Lacradora Magenta
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 bg-[#FBFBFA] border border-[#0A0B0E] p-8 sm:p-14 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
            {activeTab === 'box' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-auto flex flex-col items-center justify-center text-center py-6"
              >
                {/* 3D Box Illustration inspired by Page 10 */}
                <div className="relative w-full max-w-lg mx-auto py-8">
                  <div className="relative mx-auto w-[280px] sm:w-[380px] aspect-[4/3] bg-gradient-to-b from-white to-[#EAEAEA] border-2 border-[#1E2028] shadow-2xl flex flex-col justify-between p-6">
                    {/* Top die-cut notches */}
                    <div className="flex items-center justify-between border-b-2 border-dashed border-[#888] pb-3">
                      <span className="font-mono text-[10px] text-[#666]">VINCO SUP: 45°</span>
                      <span className="font-mono text-[10px] text-[#E6007E] font-bold">PRODUTO PATENTEADO</span>
                    </div>

                    <div className="my-auto py-4 flex items-center justify-center">
                      <MakroMSymbol color="navy" size={140} />
                    </div>

                    <div className="border-t-2 border-[#1E2028] pt-3 flex items-center justify-between text-left">
                      <div>
                        <p className="font-sans font-extrabold text-[14px] uppercase text-[#0A0B0E]">
                          Caixa M Especial
                        </p>
                        <p className="font-mono text-[11px] text-[#666]">
                          Cartão Duplex 350g // Faca Rotativa
                        </p>
                      </div>
                      <span className="w-4 h-4 bg-[#FFED00] border border-black" />
                    </div>
                  </div>
                </div>

                <p className="font-mono text-[12px] text-[#666872] uppercase tracking-wider mt-4">
                  FIG. 10 — O M COMO ESTRUTURA FÍSICA TRIDIMENSIONAL
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-auto space-y-6"
              >
                {/* Kraft Box with Magenta Tape inspired by Page 11 */}
                <div className="relative w-full aspect-[16/10] bg-[#C8A27A] border border-[#8C6D4C] p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-hidden">
                  {/* Subtle kraft pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Corner Makro Stamp */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#4A321B] font-bold">
                      CAIXA DE EXPEDIÇÃO KRAFT RECICLÁVEL
                    </span>
                    <span className="font-mono text-[10px] text-[#4A321B]">
                      LOTE #8492
                    </span>
                  </div>

                  {/* Diagonal Repeating Magenta Tape (Page 11) */}
                  <div className="relative z-20 my-auto -rotate-6 scale-110 -mx-12 py-3 bg-[#E6007E] text-white shadow-2xl border-y-2 border-white/20 flex items-center gap-6 overflow-hidden">
                    <div className="animate-marquee-left flex items-center gap-6 text-[13px] font-extrabold uppercase tracking-tight whitespace-nowrap">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6">
                          <MakroMSymbol color="navy" size={20} />
                          <span>makro&reg; impress</span>
                          <span className="w-2 h-2 rounded-full bg-white" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[#4A321B] font-mono text-[11px]">
                    <span>FITA ADESIVA PERSONALIZADA 50MM</span>
                    <span className="font-bold">SEGURANÇA &amp; BRANDING</span>
                  </div>
                </div>

                <p className="font-mono text-[12px] text-[#666872] uppercase tracking-wider text-center">
                  FIG. 11 — APLICAÇÃO EM FITA LACRADORA DE ALTA ADERÊNCIA
                </p>
              </motion.div>
            )}

            {/* Bottom info row */}
            <div className="border-t border-[#E5E5E0] pt-4 flex flex-wrap items-center justify-between text-[12px] font-mono text-[#666872]">
              <span>MATERIALIDADE DO PROCESSO GRÁFICO</span>
              <span>100% PERSONALIZÁVEL</span>
            </div>
          </div>

          {/* Right Column: Three Feature Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="p-6 bg-[#001244] text-white flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] text-[#009FE3] uppercase tracking-wider block mb-2">
                  01 // ESTRUTURA
                </span>
                <h4 className="text-[20px] font-extrabold uppercase tracking-tight mb-2">
                  Engenharia de Embalagens
                </h4>
                <p className="text-[13px] text-[#C0C8E0] leading-relaxed">
                  Desenvolvemos mockups físicos e facas especiais antes da
                  produção final para garantir encaixe, firmeza e experiência
                  tátil impecável de abertura.
                </p>
              </div>
              <div className="pt-4 border-t border-[#202E66] font-mono text-[11px] text-[#FFED00]">
                PROVAS EM ESCALA 1:1
              </div>
            </div>

            <div className="p-6 bg-[#E6007E] text-white flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] text-[#FFED00] uppercase tracking-wider block mb-2">
                  02 // BRANDING
                </span>
                <h4 className="text-[20px] font-extrabold uppercase tracking-tight mb-2">
                  Universo Visual Completo
                </h4>
                <p className="text-[13px] text-white/90 leading-relaxed">
                  Do unboxing à papelaria comercial, o glifo M é modulado para
                  transformar qualquer objeto comum em assinatura marcante.
                </p>
              </div>
              <div className="pt-4 border-t border-white/20 font-mono text-[11px] text-white">
                APLICAÇÕES MULTISSENSORIAIS
              </div>
            </div>

            <div className="p-6 bg-[#0A0B0E] text-white flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] text-[#009FE3] uppercase tracking-wider block mb-2">
                  03 // TECNOLOGIA
                </span>
                <h4 className="text-[20px] font-extrabold uppercase tracking-tight mb-2">
                  Corte &amp; Vinco Digital
                </h4>
                <p className="text-[13px] text-[#A0A0AA] leading-relaxed">
                  Máquinas de corte computadorizado que viabilizam formas
                  geométricas complexas e tiragens customizadas sem matrizes caras.
                </p>
              </div>
              <div className="pt-4 border-t border-[#22242B] font-mono text-[11px] text-[#009FE3]">
                TOLERÂNCIA ±0.1MM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymbolVersatility;
