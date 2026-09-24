import {defineField, defineType} from 'sanity'
import {CATEGORIAS_BLOG} from './lib/catalogo'
import {semMarcadoresDeRascunho} from './lib/placeholders'

export const postType = defineType({
  name: 'post',
  title: 'Post do blog',
  type: 'document',
  groups: [
    {name: 'conteudo', title: 'Conteúdo', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'interno', title: 'Interno'},
  ],
  validation: (rule) => rule.custom(semMarcadoresDeRascunho),
  fields: [
    defineField({
      name: 'title',
      title: 'Título (H1)',
      type: 'string',
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'conteudo',
      description: 'Endereço do post: /blog/<slug>. Não altere depois de publicado.',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      group: 'conteudo',
      options: {list: CATEGORIAS_BLOG},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publicado em',
      type: 'datetime',
      group: 'conteudo',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'atualizadoEm',
      title: 'Atualizado em',
      type: 'datetime',
      group: 'conteudo',
      description: 'Preencha quando o conteúdo mudar de forma relevante. Aparece no post e no schema.',
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      group: 'conteudo',
      description: 'Texto do card na listagem do blog.',
      validation: (rule) => [rule.required(), rule.max(200).warning('Resumo longo quebra o card.')],
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem de capa',
      type: 'imagemComAlt',
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Corpo do post',
      type: 'blockContent',
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'pautaRef',
      title: 'Referência da pauta',
      type: 'string',
      group: 'interno',
      description: 'Ex.: T1 · Score 89 · Semana 1. Não é publicado.',
    }),
    defineField({
      name: 'notasInternas',
      title: 'Notas internas',
      type: 'text',
      rows: 6,
      group: 'interno',
      description: 'Notas editoriais, fontes e pendências. Nunca são publicadas.',
    }),
  ],
  orderings: [
    {
      title: 'Mais recentes',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', autor: 'autor.nome', categoria: 'categoria', media: 'imagem'},
    prepare: ({title, autor, categoria, media}) => ({
      title,
      subtitle: [categoria, autor].filter(Boolean).join(' · '),
      media,
    }),
  },
})
