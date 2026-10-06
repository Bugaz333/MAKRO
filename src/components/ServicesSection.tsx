import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
  finishes: string[];
  accentColor: string;
}

const services: ServiceItem[] = [
  {
    id: 'impressos',
    number: '01',
    title: 'Impressos',
    tagline: 'Papelaria de Prestígio & Publicações de Arte',
    description:
      'Catálogos de arte, lookbooks, relatórios anuais de sustentabilidade, livros de capa dura e papelaria corporativa executiva. Rigor de alinhamento e fidelidade cromática em papéis nacionais e importados.',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    specs: ['Papéis Munken & Fedrigoni', 'Offset de Alta Lineatura', 'Digital HP Indigo'],
    finishes: ['Costura Aparente Singer', 'Hot Stamping Ouro/Cobre', 'Relevo Seco 3D'],
    accentColor: '#001244',
  },
  {
    id: 'embalagens',
    number: '02',
    title: 'Embalagens',
    tagline: 'Caixas Rígidas & Cartuchos de Alto Padrão',
    description:
      'Embalagens desenvolvidas com foco no ritual de unboxing, proteção máxima e impacto visual no ponto de venda. Estruturas rígidas acopladas, cartuchos de cosméticos e sleeves protetores.',
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
    specs: ['Cartão Rígido 1.5 a 3.0mm', 'Microondulado Acoplado', 'Fechamento Magnético'],
    finishes: ['Laminação Soft-Touch', 'Verniz UV Reserva com Relevo', 'Berços sob Medida'],
    accentColor: '#E6007E',
  },
  {
    id: 'promocionais',
    number: '03',
    title: 'Materiais Promocionais',
    tagline: 'Kits Corporativos & Experiências de Marca',
    description:
      'Kits de boas-vindas para novos colaboradores, agendas executivas, cadernos com capa dura em tecido ou couro ecológico, pastas institucionais e press kits desenhados para gerar encantamento.',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    specs: ['Miopia zero na personalização', 'Montagem artesanal', 'Logística fracionada'],
    finishes: ['Gravação em baixo-relevo', 'Fitas marcadoras com logo', 'Elásticos personalizados'],
    accentColor: '#FFED00',
  },
  {
    id: 'comunicacao-visual',
    number: '04',
    title: 'Comunicação Visual',
    tagline: 'Grandes Formatos & Sinalização Arquitetônica',
    description:
      'Painéis decorativos, sinalização de ambientes corporativos, fachadas, vitrines temporárias e estruturas para eventos. Impressão direta sobre materiais rígidos e flexíveis de alta durabilidade.',
    image:
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80',
    specs: ['Impressão UV até 3.20m', 'ACM, Acrílico, Vidro e Madeira', 'Lonas sem emenda'],
    finishes: ['Corte a laser router', 'Pintura automotiva', 'Instalação técnica especializada'],
    accentColor: '#009FE3',
  },
  {
    id: 'personalizados',
    number: '05',
    title: 'Personalizados',
    tagline: 'Tiragens Sob Medida & Dados Variáveis',
    description:
      'Projetos onde cada exemplar é único. Ideal para certificados autenticados, convites de gala com numeração de segurança, credenciais de acesso VIP e embalagens individualizadas.',
    image:
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80',
    specs: ['Software de dados variáveis', 'Impressão em papéis especiais', 'Selo holográfico'],
    finishes: ['Numeração sequencial', 'QR Codes dinâmicos', 'Bordas pintadas artesanais'],
    accentColor: '#E32619',
  },
  {
    id: 'projetos-especiais',
    number: '06',
    title: 'Projetos Especiais',
    tagline: 'Engenharia de Papel & Facas Tridimensionais',
    description:
      'Desenvolvimento do zero de soluções que desafiam a física do papel. Desdobramentos pop-up, facas com engrenagens móveis, janelas sobrepostas e materiais translúcidos combinados.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    specs: ['Prototipagem rápida', 'Cálculo estrutural de gramatura', 'Fechamento assistido'],
    finishes: ['Micro-vincos de precisão', 'Combinatórias de hot stamping', 'Laminações holográficas'],
    accentColor: '#00A843',
  },
];

export const ServicesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="solucoes" className="w-full bg-[#FFFFFF] border-b border-[#E5E5E0] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0B0E] pb-6 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase text-[#666872] tracking-wider mb-3">
              <span className="text-[#001244] font-bold">03 // SOLUÇÕES GRÁFICAS</span>
              <span>—</span>
              <span>DO PADRÃO À EXCEÇÃO</span>
            </div>
            <h2 className="text-[36px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              Capacidade Industrial, <br />
              <span className="text-[#001244]">sensibilidade de design.</span>
            </h2>
          </div>

          <p className="max-w-md text-[16px] text-[#44464F] leading-relaxed">
            Selecione uma das 6 categorias de especialidade para explorar os
            processos, materiais e acabamentos que fazem da Makro uma referência
            em personalização.
          </p>
        </div>

        {/* Categories Tab Selector with Fluid Motion */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 border-b border-[#0A0B0E] pb-6">
          {services.map((item) => {
            const isActive = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`p-4 text-left border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-[#001244] text-white border-[#001244] shadow-lg scale-[1.02]'
                    : 'bg-[#FBFBFA] text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                }`}
              >
                <span className="font-mono text-[11px] block opacity-75 mb-1">
                  {item.number}/
                </span>
                <span className="font-sans font-extrabold text-[15px] uppercase tracking-tight block">
                  {item.title}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#E6007E]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase of Selected Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border border-[#0A0B0E] bg-[#FBFBFA]"
          >
            {/* Left Column: Big Image Display */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-black min-h-[360px]">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute top-4 left-4 text-white text-[11px] font-mono px-3 py-1 uppercase tracking-wider font-bold shadow-md"
                style={{ backgroundColor: activeService.accentColor }}
              >
                CAT. {activeService.number} // {activeService.title}
              </div>
            </div>

            {/* Right Column: Narrative & Technical Specs */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[11px] text-[#666872] uppercase tracking-wider block">
                  ESPECIFICAÇÕES TÉCNICAS RECOMENDADAS
                </span>
                <h3 className="text-[28px] sm:text-[38px] font-extrabold uppercase tracking-tight text-[#0A0B0E] leading-tight">
                  {activeService.tagline}
                </h3>
                <p className="text-[16px] text-[#44464F] leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Substrates & Finishes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E5E5E0] pt-6">
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#001244] font-bold mb-2">
                    Substratos &amp; Tecnologia
                  </h4>
                  <ul className="space-y-1.5 text-[13px] text-[#44464F]">
                    {activeService.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009FE3]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#E6007E] font-bold mb-2">
                    Acabamentos Especiais
                  </h4>
                  <ul className="space-y-1.5 text-[13px] text-[#44464F]">
                    {activeService.finishes.map((fin, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]" />
                        <span>{fin}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-[#E5E5E0] pt-6 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#contato"
                  className="px-6 py-3 bg-[#0A0B0E] text-white text-[12px] font-mono uppercase tracking-wider font-bold hover:bg-[#E6007E] transition-colors"
                >
                  Solicitar Cotação para {activeService.title} &rarr;
                </a>
                <span className="font-mono text-[11px] text-[#666872]">
                  PRODUÇÃO SOB DEMANDA
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
