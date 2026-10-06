import React from 'react';
import MakroLogo, { MakroMSymbol } from './MakroLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A0B0E] text-white pt-20 pb-12 border-t border-[#1C1D24] relative overflow-hidden">
      {/* Background oversized M watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-[400px] lg:w-[600px]">
        <MakroMSymbol color="white" size={500} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#22242B]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <MakroLogo variant="full" color="white" symbolSize={42} />
            <p className="text-[15px] text-[#A0A0A8] leading-relaxed max-w-md pt-2">
              Soluções gráficas e personalização para marcas que querem ser
              vistas, lembradas e reconhecidas. Tradição industrial, sensibilidade
              de design e acabamentos nobres desde 1984.
            </p>
            <div className="font-mono text-[11px] text-[#7A7C85] space-y-1">
              <p>MAKRO IMPRESS INDÚSTRIA GRÁFICA LTDA.</p>
              <p>PARQUE INDUSTRIAL &amp; EXPEDIÇÃO — SÃO PAULO / SP</p>
              <p className="text-[#009FE3] font-bold">DE QUEM NASCEU NA GRÁFICA, MAS PENSA COMO MARCA.</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-white font-bold">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#A0A0A8]">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  A Makro &amp; Conceito
                </a>
              </li>
              <li>
                <a href="#cores" className="hover:text-white transition-colors">
                  Cores &amp; Contrastes
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Soluções Gráficas
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Portfólio de Projetos
                </a>
              </li>
              <li>
                <a href="#producao" className="hover:text-white transition-colors">
                  Do Arquivo ao Impresso
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-white font-bold">
              ESPECIALIDADES
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#A0A0A8]">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  01/ Impressos
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  02/ Embalagens
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  03/ Promocionais
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  04/ Comunicação Visual
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  05/ Personalizados
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  06/ Projetos Especiais
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-white font-bold">
              ATENDIMENTO TÉCNICO
            </h4>
            <div className="space-y-2 text-[14px] text-[#A0A0A8]">
              <p className="text-white font-semibold">contato@makroimpress.com.br</p>
              <p className="text-white">(11) 3200-0000 / (11) 99999-9999</p>
              <p className="text-[12px] font-mono text-[#7A7C85] pt-2">
                Segunda a Sexta: 08h00 às 18h00
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#contato"
                className="inline-block px-5 py-3 bg-[#E6007E] text-white text-[12px] font-mono uppercase tracking-wider font-bold hover:bg-white hover:text-[#0A0B0E] transition-colors"
              >
                Solicitar Orçamento &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Discrete Print Calibration Scale */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[11px] text-[#666872]">
          <div>
            &copy; {new Date().getFullYear()} Makro Impress Indústria Gráfica. Todos os direitos reservados.
          </div>

          {/* Interactive CMYK Print Calibration Strip */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[10px] tracking-wider text-[#555]">
              ISO 12647-2 PRINT STANDARD
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 bg-[#009FE3]" title="Cyan 100%" />
              <div className="w-3.5 h-3.5 bg-[#E6007E]" title="Magenta 100%" />
              <div className="w-3.5 h-3.5 bg-[#FFED00]" title="Yellow 100%" />
              <div className="w-3.5 h-3.5 bg-[#001244]" title="Makro Navy" />
              <div className="w-3.5 h-3.5 bg-[#E32619]" title="Red" />
              <div className="w-3.5 h-3.5 bg-[#00A843]" title="Green" />
              <div className="w-3.5 h-3.5 bg-black border border-[#444]" title="Key Black 100%" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
