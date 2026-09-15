export type Loja = {
  nome: string;
  unidade?: string;
  endereco: string;
  referencia?: string;
  imagem: string;
};

/**
 * Lojas físicas R2 Internet.
 * Fonte: catálogo atual (src/components/Lojas.tsx do site em produção) — endereços reais, preservados 1:1.
 */
export const LOJAS: Loja[] = [
  {
    nome: "Loja Pedro Leopoldo",
    unidade: "Unidade Centro",
    endereco: "Rua Francisco de Azevedo n° 27 – Centro",
    imagem: "/images/lojas/pedro-leopoldo-centro.png",
  },
  {
    nome: "Loja Pedro Leopoldo",
    unidade: "Unidade Felipe Cláudio Sales",
    endereco: "Avenida Gil Antônio Pereira n° 1016 - Felipe Cláudio Sales",
    imagem: "/images/lojas/pedro-leopoldo-felipe-claudio.png",
  },
  {
    nome: "Loja Matozinhos",
    endereco: "Avenida Caio Martins n° 84 – Centro",
    referencia: "Ponto de referência: Em frente à Escola do Rio das Velhas",
    imagem: "/images/lojas/matozinhos.png",
  },
  {
    nome: "Loja Prudente de Morais",
    endereco: "Avenida Brasília n° 1031 – Centro",
    imagem: "/images/lojas/prudente-de-morais.png",
  },
  {
    nome: "Loja Cordisburgo",
    endereco: "Rua Governador Valadares n° 88 A – Centro",
    referencia: "Ponto de referência: Próximo ao correio",
    imagem: "/images/lojas/cordisburgo.png",
  },
  {
    nome: "Loja Paraopeba",
    endereco: "Rua Américo Barbosa, 68 – Centro",
    referencia: "Referência: Rua do Açaí de Tanga",
    imagem: "/images/lojas/paraopeba.png",
  },
  {
    nome: "Loja Contagem",
    endereco: "Avenida Durval Alves de Faria, 2330 - Tropical - Contagem - MG",
    imagem: "/images/lojas/contagem.png",
  },
  {
    nome: "Loja Confins",
    endereco: "Rua Maria Rodrigues, Nº 114 - Centro - Confins - MG",
    imagem: "/images/lojas/confins.png",
  },
  {
    nome: "Loja Santa Amélia",
    endereco: "Av. Portugal, 2823 - Santa Amélia, Belo Horizonte - MG",
    imagem: "/images/lojas/santa-amelia.jpeg",
  },
  {
    nome: "Loja Santa Helena",
    endereco: "Rua Passos, 385 - Santa Helena, Contagem - MG",
    imagem: "/images/lojas/santa-helena.jpeg",
  },
  {
    nome: "Loja Petrolândia",
    endereco: "Rua da Benzina, 37 - Petrolândia, Contagem - MG",
    imagem: "/images/lojas/petrolandia.jpeg",
  },
];
