import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Corpo de texto rico. Títulos começam no H2: o H1 é sempre o título do
 * documento, montado pelo site.
 */
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Texto',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Parágrafo', value: 'normal'},
        {title: 'Título (H2)', value: 'h2'},
        {title: 'Subtítulo (H3)', value: 'h3'},
        {title: 'Citação', value: 'blockquote'},
      ],
      lists: [
        {title: 'Lista', value: 'bullet'},
        {title: 'Lista numerada', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Negrito', value: 'strong'},
          {title: 'Itálico', value: 'em'},
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'Endereço',
                type: 'url',
                description: 'Link interno começa com "/" (ex.: /planos-residenciais/).',
                validation: (rule) =>
                  rule.required().uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({type: 'imagemComAlt'}),
  ],
})
