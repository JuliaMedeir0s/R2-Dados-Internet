import { PageHero } from "@/components/sections/page-hero";

// A foto exportada do Figma já vem com o fundo azul-marinho e as linhas
// azuis: ela é o hero inteiro, por isso cobre a seção toda e não leva
// nenhum gradiente por cima.
export function EmpresarialHero() {
  return (
    <PageHero
      tone="corp"
      overlapBelow
      tag="Internet em Minas Gerais"
      title={
        <>
          <span className="font-light">Conexão de internet de</span>{" "}
          <span className="font-bold">alta disponibilidade</span>{" "}
          <span className="font-light">simétrico e</span>{" "}
          <span className="font-bold">com IP fixo!</span>
        </>
      }
      description="Conexão de verdade para sua empresa!"
      image={{
        src: "/images/figma/hero-empresarial.webp",
        alt: "Homem sorrindo usando notebook",
      }}
    />
  );
}
