import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {PinIcon} from '@sanity/icons/Pin'
import {UserIcon} from '@sanity/icons/User'

/** Tipos que existem uma vez só e não aparecem em "criar novo". */
export const SINGLETONS = new Set(['blogSettings'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Posts do blog')
        .icon(DocumentTextIcon)
        .child(
          S.documentTypeList('post')
            .title('Posts do blog')
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
        ),
      S.documentTypeListItem('author').title('Autores').icon(UserIcon),
      S.listItem()
        .title('Configurações do blog')
        .icon(CogIcon)
        .child(S.document().schemaType('blogSettings').documentId('blogSettings')),
      S.divider(),
      S.documentTypeListItem('pracaPage').title('Páginas de cidade').icon(PinIcon),
    ])
