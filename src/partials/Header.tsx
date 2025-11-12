import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  const header = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Planos Residenciais",
      href: "/planos-residenciais",
    },
    {
      label: "Planos Empresariais",
      href: "/planos-empresariais",
    },
    {
      label: "Quem Somos",
      href: "/quem",
    },
    {
      label: "Indique e Ganhe",
      href: "/indique",
    },
    {
      label: "Fale Conosco",
      href: "/fale-conosco",
    },
  ];
  return (
    <>
      {/* Main Header */}
      <header className="bg-white py-2 border-b-2 border-primary font-montserrat relative">
        <div className="px-8 md:px-18">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="">
              <img
                src="/images/Logo.png"
                alt="Logo"
                className="w-16 h-16 md:w-24 md:h-24 mr-25"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4 xl:gap-7 font-montserrat">
              {header.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-secondary hover:text-primary transition-colors font-bold border-b-2 border-transparent hover:border-primary whitespace-nowrap text-base"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Client Area Button */}
            <div className="hidden xl:flex items-center ml-8">
              <a
                id="area-cliente"
                href="https://ixc.r2dados.com.br/central_assinante_web/login"
                className="bg-secondary text-white px-4 xl:px-10 py-2 xl:py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg hover:opacity-90 whitespace-nowrap text-sm xl:text-base"
              >
                <Icon
                  icon="basil:user-solid"
                  className="w-4 h-4 xl:w-6 xl:h-6"
                />
                <span>Área do Cliente</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icon
                icon={isMenuOpen ? "maki:cross" : "ci:hamburger-md"}
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden mt-4 bg-primary rounded-lg shadow-lg border border-gray-200 absolute left-0 right-0 z-50">
              <nav className="flex flex-col py-2">
                {header.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="px-4 py-3 text-white hover:bg-white/10 transition-colors font-montserrat text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://ixc.r2dados.com.br/central_assinante_web/login"
                  className="px-4 py-3 text-white hover:bg-white/10 transition-colors font-montserrat text-sm flex items-center gap-2 border-t border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Área do Cliente</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Modal para download do APP */}
      {downloadModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={closeDownloadModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-modal-title"
        >
          <div
            className="bg-white w-96 p-6 rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="download-modal-title"
              className="text-center text-xl font-semibold mb-4"
            >
              Escolha sua plataforma para download:
            </h3>
            <a
              href="https://play.google.com/store/search?q=minha%20r2&c=apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-primary hover:bg-secondary text-white p-3 rounded-md flex items-center justify-start gap-2 mb-4">
                <img
                  src="/images/app-playstore.svg"
                  alt="Play Store"
                  className="w-6 h-6"
                />
                Play Store (Android)
              </button>
            </a>
            <a
              href="https://apps.apple.com/br/app/minha-r2/id6737197287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-primary hover:bg-secondary text-white p-3 rounded-md flex items-center justify-start gap-2">
                <img
                  src="/images/app-ios.svg"
                  alt="App Store"
                  className="w-6 h-6"
                />
                App Store (iOS)
              </button>
            </a>
            <button
              onClick={closeDownloadModal}
              className="w-full bg-secondary hover:bg-black text-white p-2 mt-4 rounded-md"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
