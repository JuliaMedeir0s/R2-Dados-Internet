import { Icon } from "@iconify/react";

export function SpeedTestBanner() {
  return (
    <section className="bg-cinza-claro py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:gap-6">
        <p className="text-sm font-medium text-texto sm:text-base">
          Contratou, chegou. Teste agora sua conexão
        </p>
        <a
          href="https://www.speedtest.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-1 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-5"
        >
          <Icon icon="mdi:speedometer" className="h-4 w-4" />
          Teste sua conexão
        </a>
      </div>
    </section>
  );
}
