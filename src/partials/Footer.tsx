import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
    <footer className="bg-secondary text-white md:px-20">
      {/* Seção Principal do Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12 mb-8 md:mb-14">
        <div className="border-t border-white"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 mt-8 md:mt-14">
          {/* Logo R2 */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <img
              src="/images/footerLogo.png"
              alt="Logo R2"
              className="w-32 h-32 md:w-35 md:h-35"
            />
            <div className="flex gap-3 mt-4 flex-col">
              <a
                href="https://play.google.com/store/search?q=minha%20r2&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar na Google Play"
                className="flex items-center hover:opacity-80 transition-opacity text-nowrap"
              >
               <Icon
                  icon="ic:outline-android"
                  className="w-5 h-5 mr-2 text-primary"
                />
                <span>Baixe nosso app</span>
              </a>
              <a
                href="https://apps.apple.com/br/app/minha-r2/id6737197287"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar na App Store"
                className="flex items-center hover:opacity-80 transition-opacity text-nowrap"
              >
                <Icon
                  icon="ic:outline-apple"
                  className="w-5 h-5 mr-2 text-primary"
                />
                <span>Baixe nosso app</span>
              </a>
            </div>
            </div>

            {/* Menu */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-montserrat mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Home
                </a>
              </li>
              <li>
                <a
                  href="/planos-residenciais"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Planos
                  Residenciais
                </a>
              </li>
              <li>
                <a
                  href="/planos-empresariais"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Planos
                  Empresariais
                </a>
              </li>
              <li>
                <a
                  href="/quem"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="/indique"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Indique e
                  Ganhe
                </a>
              </li>
              <li>
                <a
                  href="/fale-conosco"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://ixc.r2dados.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-primary mr-2">{">>"}</span>Central do
                  Assinante
                </a>
              </li>
            </ul>
            </div>

            {/* Informações Institucionais */}
          <div className="text-center w-70 max-lg:w-full -ml-7 max-lg:ml-0 md:text-left">
            <h3 className="text-xl font-bold font-montserrat mb-4 ">
              Informações Institucionais
            </h3>
            <ul className="space-y-2 font-montserrat">
              <li>
                <a
                  href="https://ixc.r2dados.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors"
                >
                  <span className="text-orange-500 mr-2">{">>"}</span>2° Via de
                  Boleto
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center md:justify-start hover:text-orange-400 transition-colors cursor-pointer w-full"
                >
                  <span className="text-orange-500 mr-2">{">>"}</span>Contratos
                </button>
              </li>
            </ul>
            </div>

            {/* Fale Conosco */}
          <div className="text-center ml-10 max-lg:ml-0 md:text-left">
            <h3 className="text-xl font-bold font-montserrat mb-4">
              Fale Conosco
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <a
                  href="https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <Icon
                    icon="basil:whatsapp-solid"
                    className="w-5 h-5 mr-2 text-primary"
                  />
                  <span>(31) 3662-1235</span>
                </a>
                </div>
              <div className="flex items-center justify-center md:justify-start">
                <a
                  href="tel:+553136621235"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <Icon
                    icon="basil:phone-solid"
                    className="w-5 h-5 mr-2 text-primary"
                  />
                  <span>(31) 3662-1235</span>
                </a>
                </div>
              <div className="flex items-center justify-center md:justify-start">
                <a
                  href="mailto:contato@r2dados.com"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <Icon
                    icon="material-symbols:mail"
                    className="w-5 h-5 mr-2 text-primary"
                  />
                    <span>contato@r2dados.com</span>
                </a>
              </div>
                </div>
            </div>

            {/* Nossas Redes */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-montserrat mb-4">
              Nossas Redes
            </h3>
            <div className="flex space-x-1 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/r2internet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon
                  icon="ant-design:instagram-filled"
                  className="w-5 h-5 text-white"
                />
              </a>
              <a
                href="https://www.facebook.com/r2dados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon
                  icon="ic:baseline-facebook"
                  className="w-5 h-5 text-white"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon
                  icon="basil:whatsapp-solid"
                  className="w-5 h-5 text-white"
                />
              </a>
              <a
                href="https://www.instagram.com/r2.empresas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon
                  icon="ant-design:instagram-filled"
                  className="w-5 h-5 text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Linha Separadora */}
      <div className="border-t border-white"></div>

      {/* Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm">
          <span>
            Copyright © 2025 R2 Dados Internet | Todos os direitos reservados |
            Desenvolvido por{" "}
          </span>
          <a
            href="https://delipe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 font-montserrat"
          >
            Delipe
          </a>
        </div>
      </div>

      {/* Modal de Contratos */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-montserrat text-secondary">
                Contratos
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Icon icon="maki:cross" className="w-6 h-6 text-secondary" />
              </button>
            </div>

            {/* Links dos Contratos e Políticas */}
            <div className="space-y-4">
              <a
                href="/PDF's/link_dedicado.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-secondary/5 hover:bg-secondary/10 rounded-xl transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ph:file-pdf-bold"
                    className="w-8 h-8 text-primary"
                  />
                  <span className="font-montserrat text-secondary font-medium">
                    Link Dedicado
                  </span>
                </div>
                <Icon
                  icon="ph:arrow-right-bold"
                  className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/PDF's/scm_e_sva.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-secondary/5 hover:bg-secondary/10 rounded-xl transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ph:file-pdf-bold"
                    className="w-8 h-8 text-primary"
                  />
                  <span className="font-montserrat text-secondary font-medium">
                    SCM e SVA
                  </span>
                </div>
                <Icon
                  icon="ph:arrow-right-bold"
                  className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/politica-privacidade"
                className="flex items-center justify-between p-4 bg-secondary/5 hover:bg-secondary/10 rounded-xl transition-colors group"
                onClick={() => setIsModalOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ph:shield-check-bold"
                    className="w-8 h-8 text-primary"
                  />
                  <span className="font-montserrat text-secondary font-medium">
                    Políticas de Privacidade
                  </span>
                </div>
                <Icon
                  icon="ph:arrow-right-bold"
                  className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      )}
        </footer>
    );
}
