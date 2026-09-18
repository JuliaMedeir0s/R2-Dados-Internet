import { PageHero } from "@/components/sections/page-hero";

// A foto do homem com notebook não foi exportada do Figma — o hero fica só
// com o fundo corp-2 e o espaço reservado à direita.
export function EmpresarialHero() {
  return (
    <PageHero
      tone="corp"
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
    />
  );
}
