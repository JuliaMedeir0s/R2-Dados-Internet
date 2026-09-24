import {defineArrayMember, defineField, defineType} from 'sanity'
import {LOJAS, PLANOS} from './lib/catalogo'
import {semMarcadoresDeRascunho} from './lib/placeholders'

/**
 * Página de cidade atendida ("praça"), ex.: /internet-fibra-pedro-leopoldo/.
 *
 * Ficam FORA deste documento, montados pelo site:
 * - consulta de CEP + cadastro de interesse, tabela de planos com botão de
 *   WhatsApp, mapas das lojas e CTA final (componentes do layout);
 * - dados de planos e lojas (vêm de web-next/src/lib enquanto não migram);
 * - JSON-LD (LocalBusiness, FAQPage, BreadcrumbList etc.), gerado a partir
 *   dos campos abaixo.
 */
export const pracaPageType = defineType({
  name: 'pracaPage',
  title: 'Página de cidade',
  type: 'document',
  groups: [
    {name: 'conteudo', title: 'Conteúdo', default: true},
    {name: 'cobertura', title: 'Cobertura e lojas'},
    {name: 'prova', title: 'Depoimentos e FAQ'},
    {name: 'seo', title: 'SEO'},
    {name: 'interno', title: 'Interno'},
  ],
  validation: (rule) => rule.custom(semMarcadoresDeRascunho),
  fields: [
    // Conteúdo
    defineField({
      name: 'cidade',
      title: 'Cidade',
      type: 'string',
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título (H1)',
      type: 'string',
      group: 'conteudo',
      description: 'Ex.: Internet fibra óptica em Pedro Leopoldo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'conteudo',
      description: 'Padrão: internet-fibra-<cidade>. Não altere depois de publicado.',
      options: {
        source: (doc) => `internet-fibra-${(doc as {cidade?: string}).cidade ?? ''}`,
        maxLength: 96,
      },
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
      name: 'atualizadoEm',
      title: 'Atualizado em',
      type: 'date',
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem principal',
      type: 'imagemComAlt',
      group: 'conteudo',
      description: 'Foto real da cidade ou da loja. Evite banco de imagens.',
    }),
    defineField({
      name: 'intro',
      title: 'Introdução',
      type: 'blockContent',
      group: 'conteudo',
      description: 'Texto logo abaixo do H1: presença na cidade, números, faixa de planos e preço.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'planos',
      title: 'Planos disponíveis',
      type: 'array',
      group: 'conteudo',
      of: [defineArrayMember({type: 'string'})],
      options: {list: PLANOS},
      description: 'Deixe vazio para mostrar todos os planos do catálogo.',
    }),
    defineField({
      name: 'prazoInstalacaoDiasUteis',
      title: 'Prazo médio de instalação (dias úteis)',
      type: 'number',
      group: 'conteudo',
      description: 'Da contratação até a visita técnica, nesta cidade.',
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: 'secoes',
      title: 'Seções livres',
      type: 'blockContent',
      group: 'conteudo',
      description:
        'Instalação, "Por que escolher um provedor da cidade" e outras seções de texto. Comece cada seção com um H2.',
    }),

    // Cobertura e lojas
    defineField({
      name: 'bairros',
      title: 'Bairros e distritos atendidos',
      type: 'array',
      group: 'cobertura',
      description: 'Confirme a lista com a engenharia de rede antes de publicar.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'bairro',
          fields: [
            defineField({
              name: 'nome',
              title: 'Nome',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'tipo',
              title: 'Tipo',
              type: 'string',
              options: {
                list: [
                  {title: 'Bairro', value: 'bairro'},
                  {title: 'Distrito', value: 'distrito'},
                  {title: 'Zona rural', value: 'rural'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              initialValue: 'bairro',
            }),
            defineField({
              name: 'cobertura',
              title: 'Cobertura',
              type: 'string',
              options: {
                list: [
                  {title: 'Total', value: 'total'},
                  {title: 'Parcial', value: 'parcial'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              initialValue: 'total',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'nome', tipo: 'tipo', cobertura: 'cobertura'},
            prepare: ({title, tipo, cobertura}) => ({
              title,
              subtitle: [tipo, cobertura === 'parcial' ? 'cobertura parcial' : null]
                .filter(Boolean)
                .join(' · '),
            }),
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'lojas',
      title: 'Lojas na cidade',
      type: 'array',
      group: 'cobertura',
      of: [defineArrayMember({type: 'string'})],
      options: {list: LOJAS},
      description:
        'Endereço, horário e telefone vêm do cadastro de lojas do site, que deve bater com o Perfil da Empresa no Google.',
    }),
    defineField({
      name: 'pracasRelacionadas',
      title: 'A R2 também atende',
      type: 'array',
      group: 'cobertura',
      of: [defineArrayMember({type: 'reference', to: [{type: 'pracaPage'}]})],
      validation: (rule) => rule.unique(),
    }),

    // Depoimentos e FAQ
    defineField({
      name: 'depoimentos',
      title: 'Depoimentos',
      type: 'array',
      group: 'prova',
      description: 'Só depoimentos reais de clientes da cidade, com autorização por escrito.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'depoimento',
          fields: [
            defineField({
              name: 'texto',
              title: 'Depoimento',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'nome',
              title: 'Primeiro nome',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bairro',
              title: 'Bairro',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'autorizado',
              title: 'Autorização por escrito recebida',
              type: 'boolean',
              initialValue: false,
              validation: (rule) =>
                rule.custom((valor) =>
                  valor === true ? true : 'Só publique depoimentos com autorização por escrito.',
                ),
            }),
          ],
          preview: {
            select: {title: 'nome', subtitle: 'bairro', texto: 'texto'},
            prepare: ({title, subtitle, texto}) => ({
              title: `${title ?? ''}${subtitle ? `, ${subtitle}` : ''}`,
              subtitle: texto,
            }),
          },
        }),
      ],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: 'faq',
      title: 'Perguntas frequentes',
      type: 'array',
      group: 'prova',
      description: 'Também gera o schema FAQPage. A resposta deve fazer sentido sozinha, sem depender do resto da página.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'pergunta',
          fields: [
            defineField({
              name: 'pergunta',
              title: 'Pergunta',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'resposta',
              title: 'Resposta',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'pergunta', subtitle: 'resposta'}},
        }),
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),

    // Interno
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
      rows: 8,
      group: 'interno',
      description:
        'Notas editoriais, fontes de números, pendências com engenharia/comercial. Nunca são publicadas.',
    }),
  ],
  preview: {
    select: {title: 'cidade', subtitle: 'slug.current', media: 'imagem'},
    prepare: ({title, subtitle, media}) => ({title, subtitle: subtitle && `/${subtitle}/`, media}),
  },
})
