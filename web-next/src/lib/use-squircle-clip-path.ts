// DEPRECATED: usado para reproduzir o arredondado "squircle" exato do
// Figma (150px de raio + 0.5 de corner smoothing) no hero da Home via
// `figma-squircle` + `clip-path`. Por decisão da Júlia, simplificamos pro
// `border-radius` padrão do CSS (`rounded-b-[150px]` em `home-hero.tsx`) —
// a diferença visual é sutil demais pra justificar uma dependência a mais.
// Este arquivo não é mais importado em nenhum lugar (e a dependência
// `figma-squircle` foi removida do `package.json`) — mantido só porque não
// consigo apagar arquivo na sua máquina por aqui. Pode apagar
// `src/lib/use-squircle-clip-path.ts` manualmente quando quiser.
export {};
