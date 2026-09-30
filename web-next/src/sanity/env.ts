/**
 * Projeto do Sanity que guarda o blog. Não são segredos (o dataset é
 * público); as variáveis só existem para apontar para outro projeto ou
 * dataset sem mexer no código. Transferir o projeto para a organização da
 * agência mantém o mesmo projectId.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uim8fqcn";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-02-19";
