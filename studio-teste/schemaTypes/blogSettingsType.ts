import {defineArrayMember, defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

/**
 * Documento único (id fixo "blogSettings", ver structure.ts) com a curadoria
 * da página /blog. Tudo opcional: campo vazio usa os posts mais recentes.
 */
const listaDePosts = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: 'array',
    description,
    of: [defineArrayMember({type: 'reference', to: [{type: 'post'}]})],
    validation: (rule) => rule.unique().max(4),
  })

export const blogSettingsType = defineType({
  name: 'blogSettings',
  title: 'Configurações do blog',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'destaque',
      title: 'Post em destaque',
      type: 'reference',
      to: [{type: 'post'}],
      description: 'Card grande no topo do blog. Vazio: mostra o post mais recente.',
    }),
    listaDePosts(
      'maisLidos',
      'Mais lidos',
      'Até 4 posts na lateral do blog e dos artigos. Vazio: os mais recentes.',
    ),
    listaDePosts(
      'maisRelevantes',
      'Mais relevantes',
      'Até 4 posts na lateral do blog e dos artigos. Vazio: os mais recentes depois dos 4 primeiros.',
    ),
  ],
  preview: {
    prepare: () => ({title: 'Configurações do blog'}),
  },
})
