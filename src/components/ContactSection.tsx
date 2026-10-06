import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Impressos',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Impressos',
    'Embalagens',
    'Materiais Promocionais',
    'Comunicação Visual',
    'Personalizados',
    'Projetos Especiais',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Olá, gostaria de solicitar um orçamento com a Makro Impress.%0A%0A*Nome:* ${encodeURIComponent(
      formData.name || 'Não informado'
    )}%0A*Empresa:* ${encodeURIComponent(
      formData.company || 'Não informada'
    )}%0A*Categoria:* ${encodeURIComponent(
      formData.category
    )}%0A*Quantidade/Tiragem:* ${encodeURIComponent(
      formData.quantity || 'A definir'
    )}%0A*Detalhes:* ${encodeURIComponent(
      formData.message || 'Gostaria de falar com um especialista sobre meu projeto.'
    )}`;
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="w-full bg-[#FBFBFA] border-b border-[#E5E5E0] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase text-[#666872] tracking-wider mb-6">
          <span className="text-[#001244] font-bold">05 // CONTATO &amp; ORÇAMENTO</span>
          <span>—</span>
          <span>ATENDIMENTO TÉCNICO</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Editorial Contact Statement */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-[38px] sm:text-[54px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#0A0B0E]">
              Vamos dar forma <br />
              <span className="text-[#001244]">ao seu projeto?</span>
            </h2>

            <p className="text-[17px] text-[#44464F] leading-relaxed">
              Nossa equipe técnica analisa minuciosamente seu arquivo ou ideia
              para recomendar os melhores papéis, processos e acabamentos com o
              melhor custo-benefício.
            </p>

            {/* Direct Studio Data */}
            <div className="border-t border-[#0A0B0E] pt-8 space-y-6 font-mono text-[13px]">
              <div>
                <span className="text-[#7A7C85] uppercase tracking-wider block text-[11px] mb-1">
                  ATENDIMENTO DIRETO
                </span>
                <p className="text-[#0A0B0E] font-bold text-[16px]">
                  contato@makroimpress.com.br
                </p>
                <p className="text-[#001244] font-bold text-[15px]">
                  (11) 3200-0000 / (11) 99999-9999
                </p>
              </div>

              <div>
                <span className="text-[#7A7C85] uppercase tracking-wider block text-[11px] mb-1">
                  PARQUE GRÁFICO &amp; EXPEDIÇÃO
                </span>
                <p className="text-[#0A0B0E]">
                  São Paulo — SP | Atendimento em todo o território nacional
                </p>
              </div>

              <div>
                <span className="text-[#7A7C85] uppercase tracking-wider block text-[11px] mb-1">
                  HORÁRIO DE OPERAÇÃO
                </span>
                <p className="text-[#0A0B0E]">
                  Segunda a Sexta — 08h00 às 18h00
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="border border-[#0A0B0E] p-6 bg-white">
              <p className="font-sans font-bold text-[15px] uppercase tracking-tight text-[#0A0B0E] mb-2">
                Prefere atendimento imediato via WhatsApp?
              </p>
              <p className="text-[13px] text-[#666872] mb-4">
                Fale diretamente com nossa equipe técnica de produção para
                esclarecer dúvidas de acabamento ou prazos.
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 bg-[#0A0B0E] text-white text-[12px] font-mono uppercase tracking-wider font-bold hover:bg-[#E6007E] transition-colors"
              >
                Conversar pelo WhatsApp &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Clean Editorial Quote Form */}
          <div className="lg:col-span-7 bg-white border border-[#0A0B0E] p-8 sm:p-12">
            <div className="border-b border-[#0A0B0E] pb-4 mb-8 flex items-center justify-between">
              <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#001244]">
                SOLICITAÇÃO DE ORÇAMENTO
              </span>
              <span className="font-mono text-[11px] text-[#7A7C85]">
                RESPOSTA EM ATÉ 24H
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#001244] text-white font-mono flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-[24px] font-extrabold uppercase text-[#0A0B0E]">
                  Solicitação Enviada com Sucesso
                </h3>
                <p className="text-[15px] text-[#4A4C55] max-w-md mx-auto">
                  Agradecemos o contato. Nossa equipe técnica entrará em contato
                  com a proposta e especificações solicitadas.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-[#0A0B0E] text-[12px] font-mono uppercase font-bold hover:bg-[#0A0B0E] hover:text-white transition-colors"
                >
                  Enviar nova solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category Selector */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-2">
                    Categoria do Projeto *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, category: cat })
                        }
                        className={`py-2 px-3 text-[12px] font-semibold tracking-tight text-center border transition-all ${
                          formData.category === cat
                            ? 'bg-[#001244] text-white border-[#001244]'
                            : 'bg-[#FBFBFA] text-[#0A0B0E] border-[#E5E5E0] hover:border-[#0A0B0E]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silva"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#FBFBFA] border border-[#D5D5D0] px-4 py-3 text-[14px] text-[#0A0B0E] focus:outline-none focus:border-[#001244]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-1.5">
                      Empresa ou Marca *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Studio Design Co."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-[#FBFBFA] border border-[#D5D5D0] px-4 py-3 text-[14px] text-[#0A0B0E] focus:outline-none focus:border-[#001244]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="mariana@empresa.com.br"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#FBFBFA] border border-[#D5D5D0] px-4 py-3 text-[14px] text-[#0A0B0E] focus:outline-none focus:border-[#001244]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#FBFBFA] border border-[#D5D5D0] px-4 py-3 text-[14px] text-[#0A0B0E] focus:outline-none focus:border-[#001244]"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-1.5">
                    Tiragem Estimada (unidades)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 500 un, 2.000 un ou tiragem sob demanda"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full bg-[#FBFBFA] border border-[#D5D5D0] px-4 py-3 text-[14px] text-[#0A0B0E] focus:outline-none focus:border-[#001244]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666872] mb-1.5">
                    Detalhes do Projeto (Formato, Papel, Acabamentos Especiais)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva seu projeto: tipo de acabamento desejado (ex: hot stamping, verniz UV, relevo), dimensões aproximadas ou qualquer especificação técnica."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#FBFBFA] border border-[#D5D5D0] px-4 py-3 text-[14px] text-[#0A0B0E] focus:outline-none focus:border-[#001244]"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#001244] text-white text-[13px] font-bold tracking-tight uppercase hover:bg-[#E6007E] transition-colors duration-200"
                  >
                    Enviar Solicitação
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-4 px-6 border-2 border-[#0A0B0E] text-[#0A0B0E] text-[13px] font-bold tracking-tight uppercase hover:bg-[#0A0B0E] hover:text-white transition-colors duration-200"
                  >
                    Enviar via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
