"use client";

import type { ReactNode } from "react";
import { ButtonLink, type ButtonLinkProps } from "@/components/ui/button";
import {
  DEFAULT_WHATSAPP_PHONE,
  getGenericWhatsappText,
  useUtm,
} from "@/lib/whatsapp";

// Botão de CTA que abre o WhatsApp com a mensagem montada a partir das UTMs
// da página. É client component só por causa do `useUtm` — a seção que o usa
// continua podendo ser Server Component. Renderiza `ButtonLink` (link de
// verdade) em vez de `<a><Button>`, que é HTML inválido.
type WhatsappButtonProps = {
  /** Complemento da frase "Olá, vim do site e gostaria de ...". */
  context: string;
  children: ReactNode;
  variant?: ButtonLinkProps["variant"];
  size?: ButtonLinkProps["size"];
  className?: string;
};

export function WhatsappButton({
  context,
  children,
  variant,
  size,
  className,
}: WhatsappButtonProps) {
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, context)
  )}`;

  return (
    <ButtonLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </ButtonLink>
  );
}
