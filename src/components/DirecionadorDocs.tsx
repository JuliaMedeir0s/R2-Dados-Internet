type DocLink = {
  label: string;
  href: string;
};

type Ferramenta = {
  nome: string;
  descricao: string;
  logo?: string;
  logoAlt?: string;
  destaque?: string;
  links: DocLink[];
};

const ferramentas: Ferramenta[] = [
  {
    nome: "HBO Max",
    descricao: "Acesse o tutorial completo para entrar e começar a assistir.",
    logo: "/images/max.png",
    logoAlt: "Logo HBO Max",
    destaque: "Streaming",
    links: [
      {
        label: "Abrir tutorial",
        href: "/PDF's/como_logar/como_logar HBO_max.pdf",
      },
    ],
  },
  {
    nome: "+Qnutri",
    descricao: "Veja o passo a passo para fazer seu primeiro acesso na plataforma.",
    logo: "/images/QNutri_logo.png",
    logoAlt: "Logo +Qnutri",
    destaque: "Saúde",
    links: [
      {
        label: "Abrir tutorial",
        href: "/PDF's/como_logar/como_logar_+Qnutri.pdf",
      },
    ],
  },
  {
    nome: "Deezer",
    descricao: "Confira como ativar sua conta e aproveitar sua assinatura.",
    logo: "/images/deezer_logo.png",
    logoAlt: "Logo Deezer",
    destaque: "Música",
    links: [
      {
        label: "Abrir tutorial",
        href: "/PDF's/como_logar/como_logar_Deezer_com_link.pdf",
      },
    ],
  },
  {
    nome: "Disney+",
    descricao: "Tutorial com as etapas para login e ativação do serviço.",
    logo: "/images/disney_plus_logo.png",
    logoAlt: "Logo Disney Plus",
    destaque: "Streaming",
    links: [
      {
        label: "Abrir tutorial",
        href: "/PDF's/como_logar/como_logar_Disney+.pdf",
      },
    ],
  },
  {
    nome: "ExitLag",
    descricao: "Escolha abaixo o tutorial ideal conforme o dispositivo que você usa.",
    logo: "/images/exitlag_logo.png",
    logoAlt: "Logo ExitLag",
    destaque: "Games",
    links: [
      {
        label: "App",
        href: "/PDF's/como_logar/como_logar_ExitLag_app.pdf",
      },
      {
        label: "Computador",
        href: "/PDF's/como_logar/como_logar_ExitLag_computador.pdf",
      },
    ],
  },
  {
    nome: "Kaspersky",
    descricao: "Acesse o tutorial correspondente ao seu dispositivo e faça o login.",
    logo: "/images/kaspersky_logo.png",
    logoAlt: "Logo Kaspersky",
    links: [
      {
        label: "Android",
        href: "/PDF's/como_logar/como_logar_Kaspersky_android.pdf",
      },
      {
        label: "PC",
        href: "/PDF's/como_logar/como_logar_Kaspersky_PC.pdf",
      },
      {
        label: "iOS",
        href: "/PDF's/como_logar/como__logar_Kaspersky_iOS.pdf",
      },
    ],
  },
  {
    nome: "Queima Diária",
    descricao: "Veja como acessar a plataforma e começar seus treinos.",
    logo: "/images/queima_diaria_logo.png",
    logoAlt: "Logo Queima Diária",
    destaque: "Bem-estar",
    links: [
      {
        label: "Abrir tutorial",
        href: "/PDF's/como_logar/como_logar_Queima_Diaria.pdf",
      },
    ],
  },
  {
    nome: "SKY+",
    descricao: "Selecione a versão do seu benefício e abra o passo a passo correto.",
    logo: "/images/SKY_light_logo.png",
    logoAlt: "Logo SKY+",
    destaque: "TV",
    links: [
      {
        label: "SKY+ Full",
        href: "/PDF's/como_logar/como_logar_SKY+_full.pdf",
      },
      {
        label: "SKY+ Light",
        href: "/PDF's/como_logar/como_logar_SKY+_light.pdf",
      },
    ],
  },
];

function getIniciais(nome: string) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase())
    .join("");
}

export default function DirecionadorDocs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
            Central de acesso
          </span>
          <h1 className="mt-5 text-4xl font-bold text-secondary md:text-5xl">
            Encontre o tutorial da sua ferramenta
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Selecione abaixo a plataforma desejada e abra o documento com o passo a passo de como logar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ferramentas.map((ferramenta) => (
            <article
              key={ferramenta.nome}
              className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(2,6,23,0.12)]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-slate-50 ring-1 ring-slate-200">
                    {ferramenta.logo ? (
                      <img
                        src={ferramenta.logo}
                        alt={ferramenta.logoAlt ?? ferramenta.nome}
                        className="max-h-11 max-w-11 object-contain"
                      />
                    ) : (
                      <span className="text-lg font-bold text-secondary">
                        {getIniciais(ferramenta.nome)}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-2xl font-bold text-secondary">
                      {ferramenta.nome}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {ferramenta.destaque}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Docs
                </span>
              </div>

              <p className="mb-6 text-sm leading-6 text-slate-600 md:text-base">
                {ferramenta.descricao}
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                {ferramenta.links.map((link) => (
                  <a
                    key={`${ferramenta.nome}-${link.label}`}
                    href={encodeURI(link.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}