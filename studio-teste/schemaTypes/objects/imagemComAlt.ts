import {defineField, defineType} from 'sanity'

export const imagemComAlt = defineType({
  name: 'imagemComAlt',
  title: 'Imagem',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
      description:
        'Descreva o que aparece na foto, citando a cidade quando fizer sentido. Ex.: "Loja da R2 Internet no Centro de Pedro Leopoldo".',
      validation: (rule) => rule.required(),
    }),
  ],
})
