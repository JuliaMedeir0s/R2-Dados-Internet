import { PageHero } from "@/components/sections/page-hero";

// O Figma reaproveita a foto do hero da Home nesta página (e mostra a tag
// "Indique & Ganhe" por engano de copiar e colar — aqui é "Quem Somos").
export function QuemSomosHero() {
  return (
    <PageHero
      tag="Quem Somos"
      title={
        <>
          <span className="font-light">Atendimento de</span>{" "}
          <span className="font-bold">Qualidade e suporte premium</span>{" "}
          <span className="font-light">e humanizado!</span>
        </>
      }
      description="Você merece mais do que somente internet!"
      image={{
        src: "/images/home-hero.png",
        alt: "Mulher sorrindo, usando fone de ouvido e segurando o celular",
      }}
    />
  );
}
