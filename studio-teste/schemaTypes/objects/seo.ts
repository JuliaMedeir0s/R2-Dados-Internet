import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Título para o Google',
      type: 'string',
      description: 'Aparece na aba do navegador e no resultado de busca. Ideal: até 60 caracteres.',
      validation: (rule) => [
        rule.required(),
        rule.max(60).warning('Acima de 60 caracteres o Google costuma cortar o título.'),
      ],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Resumo exibido abaixo do título no Google. Ideal: entre 120 e 160 caracteres.',
      validation: (rule) => [
        rule.required(),
        rule.min(120).warning('Abaixo de 120 caracteres sobra espaço no resultado de busca.'),
        rule.max(160).warning('Acima de 160 caracteres o Google costuma cortar o texto.'),
      ],
    }),
    defineField({
      name: 'keywordPrincipal',
      title: 'Palavra-chave principal',
      type: 'string',
      description: 'Uso interno da pauta; não é publicada.',
    }),
    defineField({
      name: 'keywordsSecundarias',
      title: 'Palavras-chave secundárias',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description: 'Uso interno da pauta; não são publicadas.',
    }),
  ],
})
