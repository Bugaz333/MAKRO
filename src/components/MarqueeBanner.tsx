import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const itemsRow1 = [
    'DE QUEM NASCEU NA GRÁFICA, MAS PENSA COMO MARCA',
    'QUATRO DÉCADAS DE EXPERIÊNCIA, AGORA COM UMA NOVA COR',
    'COR & PRECISÃO MILIMÉTRICA',
    'OFFSET INDUSTRIAL & DIGITAL HIGH-END',
    'PERSONALIZAÇÃO EM ESCALA',
  ];

  const itemsRow2 = [
    'SUA MARCA SEMPRE PRECISOU DE PERSONALIZAÇÃO',
    'EMBALAGENS ESTRUTURADAS & CAIXAS RÍGIDAS',
    'PROJETOS ESPECIAIS & ENGENHARIA DE PAPEL',
    'HOT STAMPING, VERNIZES & RELEVOS TÁTEIS',
    'MAKRO IMPRESS // DESDE 1984',
  ];

  return (
    <div className="w-full overflow-hidden select-none border-y border-[#0A0B0E]">
      {/* Top Banner: Vibrant Magenta with High Contrast */}
      <div className="bg-[#E6007E] text-white py-3.5 border-b border-[#0A0B0E]/20">
        <div className="animate-marquee-left flex items-center gap-8 text-[13px] sm:text-[15px] font-extrabold uppercase tracking-tight">
          {[...itemsRow1, ...itemsRow1, ...itemsRow1].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span>{text}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFED00] inline-block shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner: Rich Navy with Cyan & Yellow Accents */}
      <div className="bg-[#001244] text-[#FBFBFA] py-3">
        <div className="animate-marquee-right flex items-center gap-8 text-[12px] sm:text-[13px] font-mono uppercase tracking-wider">
          {[...itemsRow2, ...itemsRow2, ...itemsRow2].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-white hover:text-[#009FE3] transition-colors">{text}</span>
              <span className="text-[#009FE3] font-bold">///</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
