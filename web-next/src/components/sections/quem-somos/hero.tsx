import { PageHero } from "@/components/sections/page-hero";

// A mesma arte de hero do Figma serve Quem Somos e Indique & Ganhe (o Figma
// mostra a tag "Indique & Ganhe" nas duas por engano de copiar e colar —
// aqui é "Quem Somos"). A foto já vem com o fundo laranja e as linhas.
export function QuemSomosHero() {
  return (
    <PageHero
      tag="Quem Somos"
      title={
        <>
          <span className="font-light">Atendimento de</span>{" "}
          <span className="font-bold">qualidade e suporte premium</span>{" "}
          <span className="font-light">e humanizado!</span>
        </>
      }
      description="Você merece mais do que somente internet!"
      image={{
        src: "/images/figma/hero-quem-indique.webp",
        alt: "Mulher sorrindo com fone de ouvido segurando o celular",
      }}
    />
  );
}
