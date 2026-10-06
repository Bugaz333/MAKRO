import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MakroLogo from './MakroLogo';

interface HeaderProps {
  onOpenQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Makro', href: '#sobre' },
    { label: 'Cores & Design', href: '#cores' },
    { label: 'Fabricados', href: '#fabricados' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Produção', href: '#producao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Technical Bar with CMYK Indicator */}
      <div className="w-full bg-[#0A0B0E] text-[#A0A0AA] text-[11px] font-mono border-b border-[#22242B] px-4 sm:px-8 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-[#009FE3] inline-block animate-pulse"></span>
            PARQUE GRÁFICO OPERACIONAL // SP
          </span>
          <span className="hidden md:inline text-[#555866]">|</span>
          <span className="hidden md:inline text-[#A0A0B0]">DE QUEM NASCEU NA GRÁFICA, MAS PENSA COMO MARCA</span>
        </div>

        {/* Live CMYK Swatches */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[10px]">
            <span className="text-[#009FE3] font-bold">C:100</span>
            <span className="text-[#E6007E] font-bold">M:100</span>
            <span className="text-[#FFED00] font-bold">Y:100</span>
            <span className="text-white font-bold">K:100</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-[#009FE3]" title="Cyan" />
            <span className="w-2.5 h-2.5 bg-[#E6007E]" title="Magenta" />
            <span className="w-2.5 h-2.5 bg-[#FFED00]" title="Yellow" />
            <span className="w-2.5 h-2.5 bg-[#001244]" title="Navy" />
            <span className="w-2.5 h-2.5 bg-[#E32619]" title="Red" />
            <span className="w-2.5 h-2.5 bg-[#00A843]" title="Green" />
            <span className="w-2.5 h-2.5 bg-black border border-white/30" title="Key Black" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full px-4 sm:px-8 lg:px-12 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-[#E5E5E0] py-3.5 shadow-md'
            : 'bg-[#FFFFFF] border-[#E5E5E0] py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Makro Impress — Início"
          >
            <MakroLogo variant="full" color="cmyk" symbolSize={36} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-semibold tracking-tight text-[#0A0B0E] hover:text-[#001244] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E6007E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA with Spring Hover */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#contato"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#001244] text-white text-[13px] font-bold tracking-tight uppercase hover:bg-[#E6007E] transition-colors duration-200 shadow-sm"
            >
              Solicitar Orçamento
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A0B0E] hover:bg-[#EAEAE8] transition-colors"
            aria-label="Abrir menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-black transition-transform ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-black transition-opacity ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-black transition-transform ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E5E0] mt-3 pt-4 pb-6 space-y-4 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[17px] font-bold text-[#0A0B0E] py-2 border-b border-[#F0F0EE]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contato"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote && onOpenQuote();
                }}
                className="block text-center w-full py-3.5 bg-[#001244] text-white text-[14px] font-extrabold uppercase tracking-tight"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
