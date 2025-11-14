import { Icon } from "@iconify/react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      pergunta: "Como eu recebo a minha fatura para pagamento?",
      resposta:
        "As faturas físicas são enviadas ao endereço de cobrança cadastrado e dependem da distribuição dos correios. As faturas digitais podem ser solicitadas através do nosso WhatsApp (31) 3662-1235, site ou aplicativo.",
    },
    {
      pergunta: "Estou sem Internet. O que devo fazer?",
      resposta:
        "Entre em contato conosco pelo WhatsApp (31) 3662-1235 para verificar o status da sua conexão e agendar uma visita técnica se necessário.",
    },
    {
      pergunta:
        "Minha TV BOX/IPTV está travando, será problema na conexão de internet?",
      resposta:
        "Sim, pode ser um problema de conexão. Verifique se sua internet está funcionando normalmente e entre em contato conosco para diagnóstico.",
    },
    {
      pergunta: "Como posso alterar meus dados cadastrais?",
      resposta:
        "Você pode alterar seus dados através do nosso aplicativo, site ou entrando em contato pelo WhatsApp (31) 3662-1235.",
    },
    {
      pergunta: "Quais são as formas de pagamento disponíveis?",
      resposta:
        "Aceitamos PIX, cartão de crédito, débito e boleto bancário. Entre em contato para mais informações sobre as formas de pagamento.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="xl:px-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-montserrat font-bold text-secondary uppercase mb-4 max-lg:mb-2 max-lg:text-center">
                DÚVIDAS FREQUENTES
              </h3>
              <h2 className="text-4xl md:text-4xl max-lg:px-5 font-bold font-montserrat text-secondary leading-tight max-lg:text-center">
                Tire suas dúvidas no nosso FAQ!
              </h2>
              <p className="text-lg text-secondary leading-relaxed font-montserrat max-lg:text-center max-lg:px-5">
                Não encontrou a resposta que procurava? Sem problemas! Estamos
                prontos para ajudar você pelos nossos canais de atendimento.
              </p>
            </div>

            {/* Ícones de Contato */}
            <div className="flex space-x-4 max-lg:-mt-5 max-lg:justify-center">
              <a
                id="whatsapp"
                href="https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Icon
                  icon="basil:whatsapp-solid"
                  className="w-7 h-7 text-white"
                />
              </a>
              <a
                id="instagram"
                href="https://www.instagram.com/r2internet/"
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Icon
                  icon="ant-design:instagram-filled"
                  className="w-7 h-7 text-white"
                />
              </a>
              <a
                id="instagram-empresas"
                href="https://www.instagram.com/r2.empresas/"
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Icon
                  icon="ant-design:instagram-filled"
                  className="w-7 h-7 text-white"
                />
              </a>
              <a
                id="facebook"
                href="https://www.facebook.com/r2dados"
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Icon
                  icon="ic:baseline-facebook"
                  className="w-7 h-7 text-white"
                />
              </a>
            </div>
          </div>

          {/* Coluna Direita - FAQ Accordion */}
          <div className="space-y-4 max-lg:px-5">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black pb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-4 hover:bg-gray-50 rounded-lg px-4 transition-colors"
                >
                  <h3 className="text-lg font-montserrat text-secondary font-bold pr-4">
                    {faq.pergunta}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Icon
                        icon="ph:x-bold"
                        className="w-6 h-6 text-secondary"
                      />
                    ) : (
                      <Icon
                        icon="ph:plus-bold"
                        className="w-6 h-6 text-secondary"
                      />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <hr className="border-t border-black mb-4" />
                    <p className="text-secondary leading-relaxed font-montserrat text-sm">
                      {faq.resposta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
