export type Loja = {
  nome: string;
  unidade?: string;
  endereco: string;
  /** Cidade da unidade — usada pra montar o link do Google Maps. */
  cidade: string;
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
    cidade: "Pedro Leopoldo",
    imagem: "/images/lojas/pedro-leopoldo-centro.png",
  },
  {
    nome: "Loja Pedro Leopoldo",
    unidade: "Unidade Felipe Cláudio Sales",
    endereco: "Avenida Gil Antônio Pereira n° 1016 - Felipe Cláudio Sales",
    cidade: "Pedro Leopoldo",
    imagem: "/images/lojas/pedro-leopoldo-felipe-claudio.png",
  },
  {
    nome: "Loja Matozinhos",
    endereco: "Avenida Caio Martins n° 84 – Centro",
    cidade: "Matozinhos",
    referencia: "Ponto de referência: Em frente à Escola do Rio das Velhas",
    imagem: "/images/lojas/matozinhos.png",
  },
  {
    nome: "Loja Prudente de Morais",
    endereco: "Avenida Brasília n° 1031 – Centro",
    cidade: "Prudente de Morais",
    imagem: "/images/lojas/prudente-de-morais.png",
  },
  {
    nome: "Loja Cordisburgo",
    endereco: "Rua Governador Valadares n° 88 A – Centro",
    cidade: "Cordisburgo",
    referencia: "Ponto de referência: Próximo ao correio",
    imagem: "/images/lojas/cordisburgo.png",
  },
  {
    nome: "Loja Paraopeba",
    endereco: "Rua Américo Barbosa, 68 – Centro",
    cidade: "Paraopeba",
    referencia: "Referência: Rua do Açaí de Tanga",
    imagem: "/images/lojas/paraopeba.png",
  },
  {
    nome: "Loja Contagem",
    endereco: "Avenida Durval Alves de Faria, 2330 - Tropical - Contagem - MG",
    cidade: "Contagem",
    imagem: "/images/lojas/contagem.png",
  },
  {
    nome: "Loja Confins",
    endereco: "Rua Maria Rodrigues, Nº 114 - Centro - Confins - MG",
    cidade: "Confins",
    imagem: "/images/lojas/confins.png",
  },
  {
    nome: "Loja Santa Amélia",
    endereco: "Av. Portugal, 2823 - Santa Amélia, Belo Horizonte - MG",
    cidade: "Belo Horizonte",
    imagem: "/images/lojas/santa-amelia.jpeg",
  },
  {
    nome: "Loja Santa Helena",
    endereco: "Rua Passos, 385 - Santa Helena, Contagem - MG",
    cidade: "Contagem",
    imagem: "/images/lojas/santa-helena.jpeg",
  },
  {
    nome: "Loja Petrolândia",
    endereco: "Rua da Benzina, 37 - Petrolândia, Contagem - MG",
    cidade: "Contagem",
    imagem: "/images/lojas/petrolandia.jpeg",
  },
];
