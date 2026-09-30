import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/sanity/client";

/**
 * Chamado pelo webhook do Sanity a cada publicação, para o post aparecer
 * na hora em vez de esperar a revalidação por tempo (até 1 min). O segredo
 * é o mesmo cadastrado no webhook em sanity.io/manage e na variável
 * SANITY_REVALIDATE_SECRET da Hostinger.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return Response.json({ message: "SANITY_REVALIDATE_SECRET não configurado" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret, true);
  if (!isValidSignature) {
    return Response.json({ message: "Assinatura inválida" }, { status: 401 });
  }

  // `expire: 0`: a próxima visita já busca o conteúdo novo, em vez de
  // receber a versão antiga enquanto atualiza por trás.
  revalidateTag(SANITY_TAG, { expire: 0 });
  return Response.json({ revalidated: true, type: body?._type ?? null });
}
