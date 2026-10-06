import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BrandManifesto: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const pillars = [
    { title: 'AMBICIOSA & LOCAL', desc: 'Atuação de alcance nacional com o compromisso e proximidade de quem valoriza cada cliente.' },
    { title: 'AMIGÁVEL & MODERNA', desc: 'Relacionamento transparente, ágil e descomplicado em todas as etapas do pedido.' },
    { title: 'CRIATIVA & CONTEMPORÂNEA', desc: 'Direção de arte conectada com as tendências globais de design e engenharia de papel.' },
    { title: 'EXPERIENTE & CLEAN', desc: '40 anos de herança técnica eliminando excessos para entregar precisão e acabamento impecável.' },
  ];

  return (
    <section id="sobre" className="w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Concept Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full border border-[#0A0B0E] font-mono text-[11px] uppercase tracking-wider text-[#0A0B0E] font-bold">
            Conceito
          </span>
          <span className="font-mono text-[11px] uppercase text-[#666872] tracking-wider">
            POSICIONAMENTO DE MARCA // IAN GASPARINI CREATIONS
          </span>
        </div>

        {/* Main Grid: Narrative on Left, Dynamic Overlapping M Shapes on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: The Official Brand Manifesto Text */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-[36px] sm:text-[54px] lg:text-[60px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              De quem nasceu <br />
              na gráfica, mas <br />
              <span className="text-[#001244]">pensa como marca.</span>
            </h2>

            <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#3A3C44]">
              <p>
                Transformar uma marca que há tanto tempo faz parte do mercado é um
                processo delicado. São anos de história impressos na memória de
                quem acompanhou o trabalho, confiou e fez parte dessa trajetória.
                Mas evolução também faz parte do ofício de quem vive de criar,
                ajustar e projetar novas ideias.
              </p>
              <p className="font-medium text-[#0A0B0E]">
                A <strong className="text-[#001244]">Makro Impress</strong> nasce
                desse ponto de virada. Carrega a experiência de quem domina o
                processo, entende o material e valoriza o detalhe, mas com um olhar
                mais aberto, estratégico e conectado ao agora. Nosso foco continua
                sendo transformar projetos em resultados visuais consistentes, com
                técnica e identidade.
              </p>
              <p>
                A nova identidade reflete esse amadurecimento. É flexível, precisa
                e feita para se adaptar a qualquer formato, superfície ou desafio.
                É o resultado de uma história que continua, com o mesmo propósito,
                mas com um novo jeito de se expressar.
              </p>
            </div>

            {/* The 4 Personality Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E5E5E0]">
              {pillars.map((p, idx) => (
                <div key={idx} className="p-4 bg-[#FBFBFA] border border-[#E5E5E0] hover:border-[#001244] transition-colors">
                  <span className="font-sans font-extrabold text-[13px] tracking-tight text-[#001244] uppercase block mb-1">
                    {p.title}
                  </span>
                  <p className="text-[12px] text-[#666872] leading-snug">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Giant Overlapping M Shapes in CMYK Overlay (Inspired by Page 3 of PDF 2) */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center p-8 sm:p-12 min-h-[460px] sm:min-h-[580px] bg-[#FBFBFA] border border-[#0A0B0E] overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* Background Registration Marks */}
            <div className="absolute top-4 left-4 text-[#C0C0C0]">
              <div className="reg-mark" />
            </div>
            <div className="absolute top-4 right-4 text-[#C0C0C0]">
              <div className="reg-mark" />
            </div>
            <div className="absolute bottom-4 left-4 text-[#C0C0C0]">
              <div className="reg-mark" />
            </div>
            <div className="absolute bottom-4 right-4 text-[#C0C0C0]">
              <div className="reg-mark" />
            </div>

            {/* Overlapping CMYK M Shapes with Multiply Blend Mode */}
            <div className="relative w-[300px] sm:w-[420px] h-[360px] sm:h-[460px] flex items-center justify-center">
              {/* Yellow M in Backdrop */}
              <motion.div
                className="absolute top-2 right-4 mix-blend-multiply opacity-90"
                animate={{
                  x: mousePos.x * -20,
                  y: mousePos.y * -20,
                }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="w-[200px] sm:w-[260px]">
                  <svg viewBox="0 0 100 80" fill="#FFED00">
                    <path d="M0 0 L28 0 L36 28 L36 0 L64 0 L72 28 L72 0 L100 0 L100 80 L76 80 L68 52 L60 80 L40 80 L32 52 L24 80 L0 80 Z" />
                  </svg>
                </div>
              </motion.div>

              {/* Cyan M */}
              <motion.div
                className="absolute bottom-10 left-2 mix-blend-multiply opacity-90"
                animate={{
                  x: mousePos.x * 25,
                  y: mousePos.y * 25,
                }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="w-[220px] sm:w-[280px]">
                  <svg viewBox="0 0 100 80" fill="#009FE3">
                    <path d="M0 0 L28 0 L36 28 L36 0 L64 0 L72 28 L72 0 L100 0 L100 80 L76 80 L68 52 L60 80 L40 80 L32 52 L24 80 L0 80 Z" />
                  </svg>
                </div>
              </motion.div>

              {/* Magenta M */}
              <motion.div
                className="absolute top-16 left-12 mix-blend-multiply opacity-90"
                animate={{
                  x: mousePos.x * -35,
                  y: mousePos.y * 35,
                }}
                transition={{ type: 'spring', damping: 30 }}
              >
                <div className="w-[220px] sm:w-[280px]">
                  <svg viewBox="0 0 100 80" fill="#E6007E">
                    <path d="M0 0 L28 0 L36 28 L36 0 L64 0 L72 28 L72 0 L100 0 L100 80 L76 80 L68 52 L60 80 L40 80 L32 52 L24 80 L0 80 Z" />
                  </svg>
                </div>
              </motion.div>

              {/* Navy M Center Anchor */}
              <motion.div
                className="absolute bottom-2 right-8 mix-blend-multiply opacity-95"
                animate={{
                  x: mousePos.x * 15,
                  y: mousePos.y * -15,
                }}
                transition={{ type: 'spring', damping: 15 }}
              >
                <div className="w-[200px] sm:w-[250px]">
                  <svg viewBox="0 0 100 80" fill="#001244">
                    <path d="M0 0 L28 0 L36 28 L36 0 L64 0 L72 28 L72 0 L100 0 L100 80 L76 80 L68 52 L60 80 L40 80 L32 52 L24 80 L0 80 Z" />
                  </svg>
                </div>
              </motion.div>

              {/* Center Floating Tag */}
              <div className="relative z-20 bg-white/95 backdrop-blur-sm border border-[#0A0B0E] p-4 shadow-xl text-center">
                <span className="font-mono text-[11px] text-[#001244] font-bold block mb-1">
                  MESCLA CROMÁTICA REAL
                </span>
                <p className="font-sans font-extrabold text-[15px] uppercase tracking-tight text-[#0A0B0E]">
                  Ciano + Magenta + Amarelo = Azul Makro
                </p>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-[#666872] border-t border-[#E5E5E0] pt-2">
              <span>FIG. SOBREPOSIÇÃO GRÁFICA</span>
              <span>INTERAÇÃO DINÂMICA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandManifesto;
