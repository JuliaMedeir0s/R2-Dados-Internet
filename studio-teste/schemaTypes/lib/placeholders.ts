/**
 * Marcadores de rascunho usados nas pautas: [PREENCHER: ...], [NOTA INTERNA: ...],
 * [COMPONENTE: ...], [CTA FINAL: ...]. Nenhum deles pode ir pro ar.
 */
const MARCADOR = /\[(PREENCHER|NOTA|COMPONENTE|CTA)\b/i

/** Campos que são internos por definição e nunca são lidos pelo site. */
const CAMPOS_INTERNOS = new Set(['notasInternas', 'pautaRef'])

function procurar(valor: unknown, caminho: string, achados: string[]) {
  if (typeof valor === 'string') {
    if (MARCADOR.test(valor)) achados.push(caminho || '(documento)')
    return
  }
  if (Array.isArray(valor)) {
    valor.forEach((item, i) => procurar(item, `${caminho}[${i + 1}]`, achados))
    return
  }
  if (valor && typeof valor === 'object') {
    for (const [chave, filho] of Object.entries(valor)) {
      if (chave.startsWith('_') || CAMPOS_INTERNOS.has(chave)) continue
      procurar(filho, caminho ? `${caminho}.${chave}` : chave, achados)
    }
  }
}

/**
 * Validação de documento: bloqueia a publicação enquanto houver marcador de
 * rascunho em qualquer campo publicável (inclusive dentro do corpo de texto,
 * FAQ, depoimentos e textos alternativos de imagem).
 */
export function semMarcadoresDeRascunho(documento: unknown): true | string {
  const achados: string[] = []
  procurar(documento, '', achados)
  if (achados.length === 0) return true
  return `Ainda há marcadores de rascunho ([PREENCHER], [NOTA], [COMPONENTE] ou [CTA]) em: ${achados.join(', ')}. Resolva antes de publicar ou mova o conteúdo para "Notas internas".`
}
