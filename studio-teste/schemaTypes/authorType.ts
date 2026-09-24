import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'nome'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      description: 'Ex.: Coordenador de rede. Assinatura com cargo real ajuda a credibilidade no Google.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Minibio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'imagemComAlt',
    }),
  ],
  preview: {
    select: {title: 'nome', subtitle: 'cargo', media: 'foto'},
  },
})
