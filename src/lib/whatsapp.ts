// src/lib/whatsapp.ts
import { useEffect, useState } from "react";

/** Informações de UTM capturadas da URL/referrer */
export type UTM = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  pagePath: string;
};

/** Hook para ler UTMs uma vez por página (pode ser usado em qualquer componente React) */
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

    // se não veio utm_source, vê se o referrer é de fora ou do próprio site
    if (!utmSource) {
      if (cleanReferrer && !cleanReferrer.startsWith(currentHost)) {
        utmSource = cleanReferrer; // ex: google.com, instagram.com
      } else {
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

/** Deixa a origem mais bonitinha para a mensagem */
const getFriendlySource = (utm: UTM | null): string => {
  if (!utm) return "site";

  const src = (utm.source || "").toLowerCase();

  if (!src || src === "site") return "site";
  if (src.includes("google")) return "Google";
  if (src.includes("instagram")) return "Instagram";
  if (src.includes("facebook") || src.includes("meta")) return "Facebook";
  if (src.includes("tiktok")) return "TikTok";
  if (src.includes("localhost")) return "site";

  return utm.source;
};

/**
 * Mapa de mensagens específicas por campanha + plano
 * chave 1: nome da campanha (utm_campaign em minúsculo)
 * chave 2: nome do plano (plano.nome)
 *
 * Use {origem}, {campanha}, {plano}, {velocidade}, {extras} nos textos.
 */
const SPECIFIC_PLAN_MESSAGES: Record<string, Record<string, string>> = {
  blackfriday: {
    "Plano Super": "Olá, vim do {origem} e quero aproveitar a BlackFriday.",
    // Exemplo extra:
    // "Plano Turbo Pro": "Olá, vim do {origem} e quero saber mais sobre a {campanha} no {plano}."
  },
};

/**
 * Mensagem genérica para botões de CTA gerais (não só planos)
 * Exemplo:
 *  getGenericWhatsappText(utm, "saber mais sobre os planos residenciais")
 */
export const getGenericWhatsappText = (
  utm: UTM | null,
  context?: string
): string => {
  const origem = getFriendlySource(utm);
  const camp = (utm?.campaign || "").trim();

  // Sem UTM nenhuma (acesso direto), manda algo bem simples
  if (!utm) {
    if (context) {
      return `Olá, gostaria de ${context}.`;
    }
    return "Olá, gostaria de falar com um atendente.";
  }

  let msg = `Olá, vim do ${origem}`;

  if (context) {
    msg += ` e gostaria de ${context}`;
  } else {
    msg += ` e gostaria de falar com um atendente`;
  }

  if (camp) {
    msg += ` sobre a campanha ${camp}`;
  }

  msg += ".";

  return msg;
};

/** Gera o link completo do WhatsApp usando a mensagem genérica */
export const buildGenericWhatsappHref = (
  phone: string,
  utm: UTM | null,
  context?: string
) => {
  const text = getGenericWhatsappText(utm, context);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};

/**
 * Mensagem para os planos (cartões de plano)
 * - usa mensagens específicas quando configuradas em SPECIFIC_PLAN_MESSAGES
 * - senão, gera uma mensagem amigável usando origem + opcional campanha
 *
 * extrasLabel: algo como " com Paramount+" / " com HBO Max" / " com Paramount+ e HBO Max"
 */
export const getPlanWhatsappText = (
  utm: UTM | null,
  options: {
    planName: string;
    speed: string;
    extrasLabel?: string; // opcional
  }
): string => {
  const { planName, speed, extrasLabel } = options;
  const extras = extrasLabel ? extrasLabel : "";

  // Sem UTM nenhuma
  if (!utm) {
    return `Olá, tenho interesse no plano de ${speed}${extras}.`;
  }

  const origem = getFriendlySource(utm);
  const campaignKey = utm.campaign.toLowerCase();
  const campanhaLegivel = utm.campaign || "promoção";

  const perCampaign = SPECIFIC_PLAN_MESSAGES[campaignKey];

  // 1) Se existir mensagem específica para (campanha + plano), usa template
  if (perCampaign && perCampaign[planName]) {
    return perCampaign[planName]
      .replace("{origem}", origem)
      .replace("{campanha}", campanhaLegivel)
      .replace("{plano}", planName)
      .replace("{velocidade}", speed)
      .replace("{extras}", extras);
  }

  // 2) Se tem campanha mas sem template específico, menciona a campanha
  if (utm.campaign) {
    return `Olá, vim do ${origem} e gostaria de saber mais sobre a campanha ${campanhaLegivel} no plano de ${speed}${extras}.`;
  }

  // 3) Sem campanha, só origem + plano
  return `Olá, vim do ${origem} e gostaria de saber mais sobre o plano de ${speed}${extras}.`;
};