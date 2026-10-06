import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  name: string;
  category: string;
  categoryFilter: string;
  finish: string;
  client: string;
  image: string;
  badgeColor: string;
  colSpanDesktop: string;
  aspectRatio: string;
}

const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Linha Baldes 4kg Recheios Confeitaria',
    category: 'Rótulos & Embalagens',
    categoryFilter: 'embalagens',
    finish: 'Rótulo Industrial de Grande Extensão em BOPP com Verniz de Proteção contra Gordura e Atrito',
    client: 'Itaiquara (Desde 1907)',
    image: '/products/itaiquara-baldes-recheios.png',
    badgeColor: '#001244',
    colSpanDesktop: 'lg:col-span-7',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'proj-2',
    name: 'Display de Balcão Pingo de Leite',
    category: 'Displays PDV',
    categoryFilter: 'embalagens',
    finish: 'Cartão Duplex 350g, Faca Especial de Corte e Vinco com Aba Promocional Dobrável',
    client: 'Delice Alimentos',
    image: '/products/delice-display-box.jpg',
    badgeColor: '#FFED00',
    colSpanDesktop: 'lg:col-span-5',
    aspectRatio: 'aspect-[4/3] lg:aspect-[4/4.2]',
  },
  {
    id: 'proj-3',
    name: 'Catálogo Comercial de Linhas & Produtos',
    category: 'Impressos Editoriais',
    categoryFilter: 'impressos',
    finish: 'Papel Couché Fosco 170g, Impressão Offset a 4 Cores com Reprodução Fotográfica Fiel',
    client: 'Biba Alimentos (Desde 1972)',
    image: '/products/biba-catalogo-impresso.jpg',
    badgeColor: '#E32619',
    colSpanDesktop: 'lg:col-span-5',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'proj-4',
    name: 'Mistura Láctea Condensada 2,5 kg',
    category: 'Flexíveis Industriais',
    categoryFilter: 'embalagens',
    finish: 'Pouch Flexível Laminado Barreira com Solda Reforçada e Selo Regulatório S.I.F. 426',
    client: 'Mococa (Desde 1919)',
    image: '/products/mococa-mistura-lactea.jpg',
    badgeColor: '#009FE3',
    colSpanDesktop: 'lg:col-span-7',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'proj-5',
    name: 'Bobinas de Rótulos & Etiquetas Técnicas',
    category: 'Rótulos Automáticos',
    categoryFilter: 'personalizados',
    finish: 'Couché Adesivo e BOPP com Meio-corte Rotativo para Linhas de Rotulagem Industrial',
    client: 'Editora Positivo & Next',
    image: '/products/rotulos-bobinas-adesivas.jpg',
    badgeColor: '#00A843',
    colSpanDesktop: 'lg:col-span-6',
    aspectRatio: 'aspect-[16/11]',
  },
  {
    id: 'proj-6',
    name: 'Rótulo Pote Pingo de Leite 500g',
    category: 'Rótulos para Potes',
    categoryFilter: 'especiais',
    finish: 'Filme BOPP Adesivo com Verniz Protetor UV e Resistência a Baixas Temperaturas e Umidade',
    client: 'Biba Alimentos',
    image: '/products/biba-pingo-de-leite.png',
    badgeColor: '#E6007E',
    colSpanDesktop: 'lg:col-span-6',
    aspectRatio: 'aspect-[16/11]',
  },
];

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'impressos', label: 'Impressos' },
    { id: 'embalagens', label: 'Embalagens' },
    { id: 'promocionais', label: 'Promocionais' },
    { id: 'comunicacao', label: 'Comunicação Visual' },
    { id: 'personalizados', label: 'Personalizados' },
    { id: 'especiais', label: 'Especiais' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.categoryFilter === filter);

  return (
    <section id="projetos" className="w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0B0E] pb-6 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase text-[#666872] tracking-wider mb-3">
              <span className="text-[#001244] font-bold">04 // PORTFÓLIO EDITORIAL</span>
              <span>—</span>
              <span>PRODUÇÃO REAL COMPROVADA</span>
            </div>
            <h2 className="text-[36px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              Projetos que ganham vida <br />
              <span className="text-[#001244]">no papel e na forma.</span>
            </h2>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider font-bold border transition-all ${
                  filter === tab.id
                    ? 'bg-[#001244] text-white border-[#001244]'
                    : 'bg-[#FBFBFA] text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16 items-start">
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`flex flex-col ${proj.colSpanDesktop} group`}
              >
                {/* Image Container */}
                <div
                  className={`relative w-full ${proj.aspectRatio} overflow-hidden bg-[#F0F0EE] mb-5 border border-[#0A0B0E]`}
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  {/* Corner tag with category color */}
                  <span
                    className="absolute top-4 left-4 text-white text-[10px] font-mono px-2.5 py-1 uppercase tracking-wider font-bold shadow-md"
                    style={{ backgroundColor: proj.badgeColor }}
                  >
                    {proj.category}
                  </span>

                  <span className="absolute bottom-4 right-4 bg-[#0A0B0E]/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 uppercase">
                    PROJ. 0{idx + 1}
                  </span>
                </div>

                {/* Editorial Metadata */}
                <div className="space-y-2 border-t border-[#0A0B0E] pt-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[20px] sm:text-[24px] font-extrabold uppercase tracking-tight text-[#0A0B0E] group-hover:text-[#001244] transition-colors">
                      {proj.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#666872] uppercase shrink-0">
                      {proj.client}
                    </span>
                  </div>

                  <p className="font-mono text-[12px] text-[#4A4C55] leading-relaxed">
                    {proj.finish}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
