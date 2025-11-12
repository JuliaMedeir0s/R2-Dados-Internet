import { Icon } from "@iconify/react";

export default function Teste() {
  return (
    <section className="py-8 md:py-6 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-white text-3xl md:text-3xl font-semibold font-montserrat">
              Teste sua velocidade!
            </h1>
            <Icon
              icon="ph:arrow-right-bold"
              className="w-6 h-6 md:w-8 md:h-8 text-white hidden md:block"
            />
          </div>

          <a
            href="https://www.speedtest.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 md:gap-4 bg-secondary rounded-full px-8 md:px-12 py-2 md:py-1 hover:scale-105 transition-all w-full md:w-auto"
          >
            <Icon
              icon="material-symbols-light:speed"
              className="w-8 h-8 md:w-8 md:h-8 text-white"
            />
            <span className="text-white text-2xl md:text-lg font-medium">
              Teste Agora!
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
