/**
 * Listas que hoje vivem no código do site (web-next/src/lib). Enquanto planos
 * e lojas não forem para o Sanity, os documentos apontam para eles por estes
 * valores fixos. Ao adicionar uma loja ou plano no site, adicione aqui também.
 */

/** Categorias do blog (web-next/src/lib/blog-data.ts). */
export const CATEGORIAS_BLOG = [
  'Central de Ajuda',
  'Dicas e Suporte',
  'Entretenimento',
  'Problemas de Conexão',
  'Produtividade',
  'Rede e Wi-Fi',
  'Segurança Digital',
  'Tecnologia',
]

/**
 * Lojas físicas (web-next/src/lib/lojas-data.ts). O `value` é o nome do
 * arquivo da foto da loja, que já é único por unidade.
 */
export const LOJAS = [
  {title: 'Pedro Leopoldo — Centro', value: 'pedro-leopoldo-centro'},
  {title: 'Pedro Leopoldo — Felipe Cláudio Sales', value: 'pedro-leopoldo-felipe-claudio'},
  {title: 'Matozinhos', value: 'matozinhos'},
  {title: 'Prudente de Morais', value: 'prudente-de-morais'},
  {title: 'Cordisburgo', value: 'cordisburgo'},
  {title: 'Paraopeba', value: 'paraopeba'},
  {title: 'Contagem', value: 'contagem'},
  {title: 'Confins', value: 'confins'},
  {title: 'Santa Amélia', value: 'santa-amelia'},
  {title: 'Santa Helena', value: 'santa-helena'},
  {title: 'Petrolândia', value: 'petrolandia'},
]

/** Planos residenciais (NomePlano em web-next/src/lib/planos-data.ts). */
export const PLANOS = [
  'R2 Start',
  'R2 Plus',
  'R2 Start PRO',
  'R2 Plus PRO',
  'R2 Ultra',
  'R2 Gamer',
  'R2 Futebol',
  'R2 Família',
]
