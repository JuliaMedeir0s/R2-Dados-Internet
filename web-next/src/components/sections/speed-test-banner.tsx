import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

// Card branco flutuante entre os planos e a seção de aplicativos (home_01):
// sobe um pouco sobre a seção anterior com a margem negativa.
export function SpeedTestBanner() {
  return (
    <section className="bg-white px-4 pb-10 md:px-8">
      <div className="-mt-6 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl border border-brand-1/15 bg-white px-6 py-5 text-center shadow-lg sm:flex-row sm:gap-8">
        <p className="text-lg text-brand-1 md:text-xl">
          <span className="font-light">Contratou, chegou.</span>{" "}
          <span className="font-bold">Teste agora sua conexão</span>
        </p>
        <a
          href="https://www.speedtest.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="gap-2">
            <Icon icon="mdi:speedometer" className="h-4 w-4" />
            Testar Velocidade
          </Button>
        </a>
      </div>
    </section>
  );
}
