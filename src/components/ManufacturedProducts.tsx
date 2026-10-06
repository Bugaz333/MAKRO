import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ManufacturedItem {
  id: string;
  brand: string;
  productName: string;
  category: 'Embalagens' | 'Rótulos & Etiquetas' | 'Flexíveis' | 'Impressos Editoriais';
  image: string;
  specs: string;
  highlight: string;
  badgeBg: string;
  badgeText: string;
}

const manufacturedList: ManufacturedItem[] = [
  {
    id: 'delice-display',
    brand: 'Delice',
    productName: 'Display de Balcão Pingo de Leite (40un)',
    category: 'Embalagens',
    image: '/products/delice-display-box.jpg',
    specs: 'Cartão Duplex 350g // Faca Especial com Aba Promocional // Impressão Offset Alta Resolução',
    highlight: 'Estrutura dobrável de alta rigidez para ponto de venda.',
    badgeBg: '#FFED00',
    badgeText: '#0A0B0E',
  },
  {
    id: 'mococa-condensado',
    brand: 'Mococa (Desde 1919)',
    productName: 'Mistura Láctea Condensada 2,5 kg',
    category: 'Flexíveis',
    image: '/products/mococa-mistura-lactea.jpg',
    specs: 'Pouch Flexível Laminado Barreira // Impressão de Alta Definição // Selo Regulatório S.I.F.',
    highlight: 'Embalagem resistente para food service com solda reforçada.',
    badgeBg: '#001244',
    badgeText: '#FFFFFF',
  },
  {
    id: 'rotulos-bobinas',
    brand: 'Editora Positivo & Diversos',
    productName: 'Bobinas de Rótulos & Etiquetas Técnicas',
    category: 'Rótulos & Etiquetas',
    image: '/products/rotulos-bobinas-adesivas.jpg',
    specs: 'Couché Adesivo & BOPP // Meio-Corte Rotativo de Precisão // Para Rotulagem Automática',
    highlight: 'Bobinas industriais com alta velocidade de aplicação.',
    badgeBg: '#009FE3',
    badgeText: '#FFFFFF',
  },
  {
    id: 'biba-pingo-leite',
    brand: 'Biba (Desde 1972)',
    productName: 'Rótulo Pote Pingo de Leite 500g',
    category: 'Rótulos & Etiquetas',
    image: '/products/biba-pingo-de-leite.png',
    specs: 'Filme BOPP Adesivo com Verniz Protetor UV // Alta Resistência a Frio e Umidade',
    highlight: 'Rótulo envolvente com fidelidade máxima de cores.',
    badgeBg: '#E6007E',
    badgeText: '#FFFFFF',
  },
  {
    id: 'itaiquara-baldes',
    brand: 'Itaiquara (Desde 1907)',
    productName: 'Linha Baldes 4kg Recheios Confeitaria',
    category: 'Rótulos & Etiquetas',
    image: '/products/itaiquara-baldes-recheios.png',
    specs: 'Rótulo Industrial de Grande Extensão // Verniz Protetor contra Gordura e Atrito',
    highlight: 'Identificação para indústria de confeitaria profissional.',
    badgeBg: '#001244',
    badgeText: '#FFFFFF',
  },
  {
    id: 'biba-catalogo',
    brand: 'Biba Alimentos',
    productName: 'Catálogo Comercial de Linhas & Produtos',
    category: 'Impressos Editoriais',
    image: '/products/biba-catalogo-impresso.jpg',
    specs: 'Papel Couché Fosco 170g // Impressão Offset 4 Cores com Registro Perfeito // Dobras e Lombada',
    highlight: 'Material comercial de vendas com reprodução fotográfica fiel.',
    badgeBg: '#E32619',
    badgeText: '#FFFFFF',
  },
  {
    id: 'biba-pe-moca',
    brand: 'Biba Alimentos',
    productName: 'Rótulo Pote Pé de Moça 1,100 kg',
    category: 'Rótulos & Etiquetas',
    image: '/products/biba-pe-de-moca.jpg',
    specs: 'Rótulo Adesivo em BOPP // Cola Especial para Superfície Plástica // Verniz Brilho',
    highlight: 'Destaque visual na prateleira para pote de grande porte.',
    badgeBg: '#FFED00',
    badgeText: '#0A0B0E',
  },
  {
    id: 'next-etiquetas',
    brand: 'Next Equipamentos',
    productName: 'Etiquetas Técnicas & Bobinas Especiais',
    category: 'Rótulos & Etiquetas',
    image: '/products/next-rotulos-bobinas.jpg',
    specs: 'Bobinas de Etiquetas Térmicas & Adesivas // Numeração Sequencial & Códigos de Barra',
    highlight: 'Controle logístico, patrimonial e rastreabilidade.',
    badgeBg: '#00A843',
    badgeText: '#FFFFFF',
  },
];

export const ManufacturedProducts: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ManufacturedItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Fabricados' },
    { id: 'Embalagens', label: 'Displays & Caixas' },
    { id: 'Rótulos & Etiquetas', label: 'Rótulos em Bobina' },
    { id: 'Flexíveis', label: 'Embalagens Flexíveis' },
    { id: 'Impressos Editoriais', label: 'Catálogos & Impressos' },
  ];

  const filteredItems =
    selectedFilter === 'all'
      ? manufacturedList
      : manufacturedList.filter((item) => item.category === selectedFilter);

  return (
    <section id="fabricados" className="w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0B0E] pb-6 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full border border-[#0A0B0E] font-mono text-[11px] uppercase tracking-wider text-[#0A0B0E] font-bold">
                Produção Real
              </span>
              <span className="font-mono text-[11px] uppercase text-[#666872] tracking-wider">
                CASES INDUSTRIAIS // FABRICADOS NA MAKRO
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              Produtos reais, <br />
              <span className="text-[#001244]">marcas consagradas.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-[16px] text-[#44464F] leading-relaxed">
              Grandes marcas da indústria alimentícia, farmacêutica, editorial e
              corporativa confiam suas embalagens, rótulos adesivos em bobina e
              displays de balcão ao parque gráfico da Makro Impress.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedFilter(c.id)}
                  className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider font-bold border transition-all ${
                    selectedFilter === c.id
                      ? 'bg-[#001244] text-white border-[#001244]'
                      : 'bg-[#FBFBFA] text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((prod) => (
              <motion.div
                layout
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveModalItem(prod)}
                className="bg-[#FBFBFA] border border-[#0A0B0E] flex flex-col justify-between overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow"
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] bg-white p-4 flex items-center justify-center overflow-hidden border-b border-[#E5E5E0]">
                  <img
                    src={prod.image}
                    alt={prod.productName}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Brand Tag in Corner */}
                  <span
                    className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 shadow-sm"
                    style={{
                      backgroundColor: prod.badgeBg,
                      color: prod.badgeText,
                    }}
                  >
                    {prod.brand}
                  </span>

                  <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#888] bg-white/90 px-1 border border-[#DDD]">
                    {prod.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="font-sans font-extrabold text-[16px] sm:text-[17px] uppercase tracking-tight text-[#0A0B0E] leading-snug group-hover:text-[#001244] transition-colors">
                      {prod.productName}
                    </h3>
                    <p className="text-[12px] text-[#666872] leading-relaxed mt-1">
                      {prod.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E0] font-mono text-[10px] text-[#44464F] flex items-center justify-between">
                    <span className="truncate pr-2">{prod.specs}</span>
                    <span className="text-[#001244] font-bold shrink-0">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Full Image & Technical Sheet */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 z-50 bg-[#0A0B0E]/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white border-2 border-[#0A0B0E] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-[#0A0B0E] text-black font-mono font-bold hover:bg-[#0A0B0E] hover:text-white transition-colors"
                >
                  ✕
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5"
                    style={{
                      backgroundColor: activeModalItem.badgeBg,
                      color: activeModalItem.badgeText,
                    }}
                  >
                    {activeModalItem.brand}
                  </span>
                  <span className="font-mono text-[11px] text-[#666]">
                    CATEGORIA: {activeModalItem.category}
                  </span>
                </div>

                <div className="w-full h-[280px] sm:h-[340px] bg-[#F5F5F3] border border-[#E5E5E0] p-4 flex items-center justify-center mb-6">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.productName}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="font-sans font-extrabold text-[22px] sm:text-[26px] uppercase tracking-tight text-[#0A0B0E] mb-2">
                  {activeModalItem.productName}
                </h3>

                <p className="text-[14px] text-[#44464F] mb-4">
                  {activeModalItem.highlight}
                </p>

                <div className="p-4 bg-[#FBFBFA] border border-[#E5E5E0] font-mono text-[12px] space-y-1 mb-6">
                  <p className="text-[#001244] font-bold">FICHA TÉCNICA DE PRODUÇÃO:</p>
                  <p className="text-[#333]">{activeModalItem.specs}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href="#contato"
                    onClick={() => setActiveModalItem(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#001244] text-white text-[12px] font-mono uppercase tracking-wider font-bold hover:bg-[#E6007E] transition-colors text-center"
                  >
                    Solicitar Orçamento Similar &rarr;
                  </a>
                  <span className="font-mono text-[11px] text-[#888]">
                    PARQUE GRÁFICO MAKRO IMPRESS
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ManufacturedProducts;
