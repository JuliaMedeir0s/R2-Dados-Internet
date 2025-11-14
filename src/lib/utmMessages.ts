import { useEffect, useState } from "react";

export type UTM = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  pagePath: string;
};

export const useUtm = () => {
  const [utm, setUtm] = useState<UTM | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pagePath = url.pathname.replace(/^\/|\/$/g, "") || "home";

    const cleanReferrer = document.referrer
      ? document.referrer.replace(/^https?:\/\//, "")
      : "";
    const currentHost = window.location.host;

    let utmSource = url.searchParams.get("utm_source") || "";

    // se não veio utm_source, decide se usa o referrer ou não
    if (!utmSource) {
      if (cleanReferrer && !cleanReferrer.startsWith(currentHost)) {
        // referrer de OUTRO domínio → usa como origem (ex: google.com)
        utmSource = cleanReferrer;
      } else {
        // referrer é do próprio site ou não existe → trata como Direto
        utmSource = "Site";
      }
    }

    const utmMedium = url.searchParams.get("utm_medium") || "Organico";
    const utmCampaign = url.searchParams.get("utm_campaign") || "";
    const utmContent = url.searchParams.get("utm_content") || pagePath;
    const utmTerm = url.searchParams.get("utm_term") || "";

    setUtm({
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
      content: utmContent,
      term: utmTerm,
      pagePath,
    });
  }, []);

  return utm;
};

const getFriendlySource = (utm: UTM): string => {
  const src = (utm.source || "").toLowerCase();

  if (!src || src === "direto" || src === "site") return "site";
  if (src.includes("google")) return "Google";
  if (src.includes("instagram")) return "Instagram";
  if (src.includes("facebook") || src.includes("meta")) return "Facebook";
  if (src.includes("tiktok")) return "TikTok";

  if (src.includes("localhost")) return "site";

  return utm.source;
};

// aqui você controla QUAL campanha/plano tem texto específico
const SPECIFIC_MESSAGES: Record<string, Record<string, string>> = {
  blackfriday: {
    "Plano Super": "Olá, vim do {origem} e quero aproveitar a Black Friday.",
  },
};

const defaultWhatsMsg = (
  planoNome: string,
  velocidade: string,
  utm?: UTM | null
) => {
  if (!utm) {
    return `Olá, tenho interesse no plano de ${velocidade}`;
  }

  const origem = getFriendlySource(utm);
  const camp = (utm.campaign || "").trim();

  if (camp) {
    return `Olá, vim do ${origem} e gostaria de saber mais sobre a campanha ${camp} no plano de ${velocidade}.`;
  }

  return `Olá, vim do ${origem} e gostaria de saber mais sobre o plano de ${velocidade}.`;
};

export const getWhatsappText = (
  planoNome: string,
  velocidade: string,
  utm: UTM | null
) => {
  if (!utm) return defaultWhatsMsg(planoNome, velocidade);

  const campaignKey = utm.campaign.toLowerCase();
  const perCampaign = SPECIFIC_MESSAGES[campaignKey];
  const origem = getFriendlySource(utm);
  const campanhaLegivel = utm.campaign || "promoção";

  // mensagem específica para (campanha + plano)
  if (perCampaign && perCampaign[planoNome]) {
    return perCampaign[planoNome]
      .replace("{origem}", origem)
      .replace("{campanha}", campanhaLegivel);
  }

  // fallback: mensagem padrão amigável
  return defaultWhatsMsg(planoNome, velocidade, utm);
};
