export type TutorialLink = {
  label: string;
  href: string;
};

export type FerramentaTutorial = {
  nome: string;
  descricao: string;
  /** Categoria mostrada abaixo do nome. O Kaspersky não tinha uma no site antigo. */
  categoria?: string;
  logo?: string;
  logoAlt?: string;
  links: TutorialLink[];
};

/**
 * Os 8 serviços do "direcionador de documentos" do site antigo
 * (`src/components/DirecionadorDocs.tsx` na branch `main`), com os mesmos
 * nomes, categorias, descrições e rótulos de link — só os caminhos dos PDFs
 * mudaram: saíram de `/PDF's/como_logar/...` (espaço, acento, `+` e apóstrofo
 * na URL) pra `/pdfs/tutoriais/<slug>.pdf`.
 *
 * Logos: os PNGs exportados do Figma em `public/images/figma/apps/`. +Qnutri e
 * Queima Diária não têm asset exportado — ficam com as iniciais num bloco,
 * como o componente antigo já fazia quando `logo` era vazio.
 */
export const TUTORIAIS: FerramentaTutorial[] = [
  {
    nome: "HBO Max",
    descricao: "Acesse o tutorial completo para entrar e começar a assistir.",
    categoria: "Streaming",
    logo: "/images/figma/apps/max.png",
    logoAlt: "Logo HBO Max",
    links: [
      { label: "Abrir tutorial", href: "/pdfs/tutoriais/como-logar-hbo-max.pdf" },
    ],
  },
  {
    nome: "+Qnutri",
    descricao:
      "Veja o passo a passo para fazer seu primeiro acesso na plataforma.",
    categoria: "Saúde",
    links: [
      { label: "Abrir tutorial", href: "/pdfs/tutoriais/como-logar-plus-qnutri.pdf" },
    ],
  },
  {
    nome: "Deezer",
    descricao: "Confira como ativar sua conta e aproveitar sua assinatura.",
    categoria: "Música",
    logo: "/images/figma/apps/deezer.png",
    logoAlt: "Logo Deezer",
    links: [
      {
        label: "Abrir tutorial",
        href: "/pdfs/tutoriais/como-logar-deezer-com-link.pdf",
      },
    ],
  },
  {
    nome: "Disney+",
    descricao: "Tutorial com as etapas para login e ativação do serviço.",
    categoria: "Streaming",
    logo: "/images/figma/apps/disney.png",
    logoAlt: "Logo Disney Plus",
    links: [
      {
        label: "Abrir tutorial",
        href: "/pdfs/tutoriais/como-logar-disney-plus.pdf",
      },
    ],
  },
  {
    nome: "ExitLag",
    descricao:
      "Escolha abaixo o tutorial ideal conforme o dispositivo que você usa.",
    categoria: "Games",
    logo: "/images/figma/apps/exitlag.png",
    logoAlt: "Logo ExitLag",
    links: [
      { label: "App", href: "/pdfs/tutoriais/como-logar-exitlag-app.pdf" },
      {
        label: "Computador",
        href: "/pdfs/tutoriais/como-logar-exitlag-computador.pdf",
      },
    ],
  },
  {
    nome: "Kaspersky",
    descricao:
      "Acesse o tutorial correspondente ao seu dispositivo e faça o login.",
    logo: "/images/figma/apps/kaspersky.png",
    logoAlt: "Logo Kaspersky",
    links: [
      { label: "Android", href: "/pdfs/tutoriais/como-logar-kaspersky-android.pdf" },
      { label: "PC", href: "/pdfs/tutoriais/como-logar-kaspersky-pc.pdf" },
      { label: "iOS", href: "/pdfs/tutoriais/como-logar-kaspersky-ios.pdf" },
    ],
  },
  {
    nome: "Queima Diária",
    descricao: "Veja como acessar a plataforma e começar seus treinos.",
    categoria: "Bem-estar",
    links: [
      {
        label: "Abrir tutorial",
        href: "/pdfs/tutoriais/como-logar-queima-diaria.pdf",
      },
    ],
  },
  {
    nome: "SKY+",
    descricao:
      "Selecione a versão do seu benefício e abra o passo a passo correto.",
    categoria: "TV",
    logo: "/images/figma/apps/sky-light.png",
    logoAlt: "Logo SKY+",
    links: [
      { label: "SKY+ Full", href: "/pdfs/tutoriais/como-logar-sky-plus-full.pdf" },
      {
        label: "SKY+ Light",
        href: "/pdfs/tutoriais/como-logar-sky-plus-light.pdf",
      },
    ],
  },
];
