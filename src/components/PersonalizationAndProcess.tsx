import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MakroMSymbol } from './MakroLogo';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  color: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Projeto',
    description:
      'Análise rigorosa de arquivos digitais, fechamento pré-impressão, conferência de sangrias e aprovação de provas contratuais com perfil de cor FOGRA.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    caption: 'Conferência técnica & prova de cor',
    color: '#009FE3',
  },
  {
    number: '02',
    title: 'Preparação',
    description:
      'Gravação direta de chapas térmicas CTP a laser em altíssima lineatura, ajuste de formulação de tintas especiais e calibração espectral de máquina.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
    caption: 'Gravação CTP & calibração de tintas',
    color: '#E6007E',
  },
  {
    number: '03',
    title: 'Produção',
    description:
      'Impressão offset e digital contínua com monitoramento densitométrico folha a folha, mantendo uniformidade cromática e velocidade industrial.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
    caption: 'Impressão com controle densitométrico',
    color: '#FFED00',
  },
  {
    number: '04',
    title: 'Acabamento',
    description:
      'Corte e vinco milimétrico, laminação com toque aveludado soft-touch, aplicação seletiva de vernizes UV 3D, relevos secos e hot stamping.',
    image:
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=700&q=80',
    caption: 'Corte de precisão, dobras & efeitos',
    color: '#E32619',
  },
  {
    number: '05',
    title: 'Entrega',
    description:
      'Revisão manual lote a lote, embalagem selada em filme termoencolhível contra umidade e poeira, e logística pontual rastreada para todo o país.',
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=700&q=80',
    caption: 'Inspeção de qualidade & expedição',
    color: '#00A843',
  },
];

export const PersonalizationAndProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* 1. SEÇÃO DE PERSONALIZAÇÃO (Inspirada diretamente na Página 16 da Marca) */}
      <section className="w-full bg-[#0A0B0E] text-white border-b border-[#22242B] overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-7 p-8 sm:p-14 lg:p-20 flex flex-col justify-between">
            {/* Top Metadata */}
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#A0A0A8] tracking-widest uppercase mb-10">
              <span className="w-2 h-2 rounded-full bg-[#E6007E]" />
              <span className="text-[#E6007E] font-bold">MAKRO PERSONALIZAÇÃO</span>
              <span>/</span>
              <span>EXCLUSIVIDADE EM ESCALA</span>
            </div>

            {/* Monumental Headline */}
            <div className="my-auto space-y-6">
              <h2 className="text-[42px] sm:text-[66px] lg:text-[76px] font-extrabold uppercase leading-[0.92] tracking-[-0.03em]">
                Sua marca <br />
                sempre precisou <br />
                de <span className="text-[#E6007E]">personalização.</span>
              </h2>

              <p className="max-w-xl text-[18px] sm:text-[20px] text-[#C0C0C8] font-normal leading-relaxed pt-2">
                Não existem duas marcas iguais. Nossa infraestrutura gráfica é
                estruturada para produzir desde peças institucionais unitárias até
                grandes tiragens industriais com o mesmo rigor estético.
              </p>
            </div>

            {/* Bottom Callout */}
            <div className="pt-10 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6007E] text-white text-[13px] font-bold tracking-tight uppercase hover:bg-white hover:text-[#0A0B0E] transition-colors duration-200 shadow-xl"
              >
                Iniciar Projeto Personalizado &rarr;
              </motion.a>

              <span className="font-mono text-[12px] text-[#888]">
                ATENDIMENTO TÉCNICO IMEDIATO
              </span>
            </div>
          </div>

          {/* Right Column: Giant Magenta Block with Monumental Makro 'M' (Página 16) */}
          <div className="lg:col-span-5 bg-[#E6007E] p-8 sm:p-14 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
            {/* Massive Structural M Glyph */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="my-auto flex items-center justify-center"
            >
              <div className="w-[300px] sm:w-[400px] max-w-full drop-shadow-2xl">
                <MakroMSymbol color="navy" size={320} />
              </div>
            </motion.div>

            {/* Bottom Technical Tag */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-4 font-mono text-[11px] text-white uppercase tracking-wider">
              <span>DESIGN // FIDELIDADE DE MARCA</span>
              <span>100% AUTORAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE PRODUÇÃO (DO ARQUIVO AO IMPRESSO) */}
      <section id="producao" className="w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0B0E] pb-6 mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-[12px] uppercase text-[#666872] tracking-wider mb-3">
                <span className="text-[#001244] font-bold">05 // PROCESSO LINEAR</span>
                <span>—</span>
                <span>ETAPAS DE PRODUÇÃO GRÁFICA</span>
              </div>
              <h2 className="text-[36px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
                Do arquivo <br />
                <span className="text-[#001244]">ao impresso.</span>
              </h2>
            </div>

            <p className="max-w-md text-[16px] text-[#44464F] leading-relaxed">
              Sem fórmulas abstratas. Um fluxo de trabalho linear, transparente e
              controlado milímetro a milímetro para garantir que o resultado final
              seja exatamente o que foi planejado.
            </p>
          </div>

          {/* 5 Linear Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const isHovered = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`flex flex-col justify-between border-t-2 pt-5 transition-all duration-300 group cursor-pointer ${
                    isHovered ? 'border-[#001244] -translate-y-1' : 'border-[#0A0B0E]'
                  }`}
                >
                  <div>
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="font-mono font-bold text-[32px] sm:text-[40px] leading-none transition-colors"
                        style={{ color: isHovered ? step.color : '#001244' }}
                      >
                        {step.number}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-extrabold uppercase tracking-tight text-[#0A0B0E] mb-3 group-hover:text-[#001244] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[14px] text-[#4A4C55] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Macro Image & Caption */}
                  <div className="mt-auto space-y-2">
                    <div className="w-full aspect-[4/3] overflow-hidden bg-[#F0F0EE] border border-[#0A0B0E]">
                      <img
                        src={step.image}
                        alt={step.caption}
                        className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="font-mono text-[10px] text-[#666872] uppercase tracking-wider border-b border-[#E5E5E0] pb-2 flex items-center justify-between">
                      <span>{step.caption}</span>
                      <span className="text-[#001244] font-bold">&rarr;</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalizationAndProcess;
