import { PageHero } from "@/components/sections/page-hero";

export function IndiqueHero() {
  return (
    <PageHero
      tag="Indique & Ganhe"
      title={
        <>
          <span className="font-light">Indique um amigo e</span>{" "}
          <span className="font-bold">ganhe benefícios</span>
        </>
      }
      description="Indique amigos, familiares ou vizinhos para conhecer a R2 Internet. Quando a instalação for concluída, você recebe R$30,00 de desconto na sua mensalidade* como forma de agradecimento pela indicação."
      image={{
        src: "/images/home-hero.png",
        alt: "Mulher sorrindo, usando fone de ouvido e segurando o celular",
      }}
    />
  );
}
