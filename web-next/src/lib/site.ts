/**
 * Endereço e visibilidade do site por ambiente, lidos no build.
 *
 * - Produção: nenhuma variável (cai em r2dados.com, indexável).
 * - Teste/aprovação na Hostinger: `SITE_URL` com o domínio de teste e
 *   `SITE_NOINDEX=true`, para o Google não indexar uma cópia do site.
 *
 * Mudar qualquer uma delas no painel exige um novo deploy.
 */
export const SITE_URL = (process.env.SITE_URL || "https://r2dados.com").replace(/\/+$/, "");

export const SITE_NOINDEX = process.env.SITE_NOINDEX === "true";
