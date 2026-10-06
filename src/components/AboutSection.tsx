import React from 'react';
import MakroLogo, { MakroMSymbol } from './MakroLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase text-[#666872] tracking-wider mb-8">
          <span className="text-[#001244] font-bold">01 // A MAKRO</span>
          <span>—</span>
          <span>HISTÓRIA, TÉCNICA E TRADIÇÃO</span>
        </div>

        {/* Headline: Herança Profissional. Impressão Familiar. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-[38px] sm:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              Herança Profissional. <br />
              <span className="text-[#001244]">Impressão Familiar.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-[17px] sm:text-[19px] leading-[1.5] text-[#33353D] font-normal">
              A Makro nasceu da paixão pelo ofício gráfico e evoluiu com as
              tecnologias mais avançadas de impressão. Décadas dedicadas a
              transformar ideias em materiais que comunicam presença e valor real.
            </p>
          </div>
        </div>

        {/* The Graphic Composition directly inspired by Page 13 & 14 of Brand Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#0A0B0E]">
          {/* Left Block: The Yellow & Magenta Decade Blocks + Navy Logo Block */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#0A0B0E]">
            {/* Yellow Block with 04/ */}
            <div className="bg-[#FFED00] p-8 sm:p-12 border-b border-[#0A0B0E]">
              <span className="font-sans font-extrabold text-[54px] sm:text-[72px] leading-none tracking-tighter text-[#0A0B0E] block">
                04/
              </span>
            </div>

            {/* Magenta Block: 04/ Décadas de experiência */}
            <div className="bg-[#E6007E] p-8 sm:p-10 text-white border-b border-[#0A0B0E]">
              <span className="font-mono text-[13px] uppercase tracking-wider block mb-2 opacity-90">
                Trajetória no setor gráfico
              </span>
              <p className="font-sans font-extrabold text-[24px] sm:text-[30px] leading-tight tracking-tight uppercase">
                04/ Décadas de experiência no setor gráfico
              </p>
            </div>

            {/* Navy Block with White Logo */}
            <div className="bg-[#001244] p-8 sm:p-10 text-white flex items-center justify-between">
              <MakroLogo variant="full" color="white" symbolSize={36} />
              <span className="font-mono text-[11px] text-[#A0B0E0]">
                DESDE 1984
              </span>
            </div>
          </div>

          {/* Right Block: Two-column Editorial Text + Halftone Craftsmanship Photo */}
          <div className="lg:col-span-7 bg-[#FBFBFA] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Background M Structural Silhouette */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-[360px]">
              <MakroMSymbol color="black" size={320} />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] sm:text-[16px] leading-[1.6] text-[#3A3C44] mb-12">
              <div>
                <p className="font-semibold text-[#0A0B0E] mb-3 text-[17px]">
                  Cuidado artesanal, escala industrial.
                </p>
                <p>
                  Cada projeto gráfico confiado à Makro recebe atenção minuciosa em
                  todas as suas etapas: da análise criteriosa do arquivo digital ao
                  acabamento manual e conferência de lote. Combinamos a disciplina dos
                  mestres impressores com a tecnologia dos equipamentos modernos.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0A0B0E] mb-3 text-[17px]">
                  Parceria em cada detalhe.
                </p>
                <p>
                  Entendemos que impressos não são apenas papel e tinta: são a
                  materialização física da identidade de uma marca. Por isso,
                  trabalhamos em estreita colaboração com agências, designers e
                  empresas para entregar fidelidade de cor, precisão de registro e
                  materiais de alto impacto.
                </p>
              </div>
            </div>

            {/* Halftone / Press Photo inspired by Page 14 */}
            <div className="relative z-10 border-t border-[#E5E5E0] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"
                  alt="Processo gráfico industrial Makro"
                  className="w-16 h-16 object-cover border border-[#0A0B0E] grayscale contrast-125"
                />
                <div>
                  <p className="font-sans font-bold text-[14px] text-[#0A0B0E] uppercase tracking-tight">
                    Controle Rigoroso de Produção
                  </p>
                  <p className="font-mono text-[12px] text-[#666872]">
                    Calibração cromática e inspeção contínua
                  </p>
                </div>
              </div>

              {/* Discreet CMYK dots rosette */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#009FE3]" title="Cyan" />
                <span className="w-3 h-3 rounded-full bg-[#E6007E]" title="Magenta" />
                <span className="w-3 h-3 rounded-full bg-[#FFED00]" title="Yellow" />
                <span className="w-3 h-3 rounded-full bg-[#0A0B0E]" title="Key" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
