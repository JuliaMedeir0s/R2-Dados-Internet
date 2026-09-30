import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {ptBRLocale} from '@sanity/locale-pt-br'
import {schemaTypes} from './schemaTypes'
import {SINGLETONS, structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'R2 Internet',

  projectId: 'uim8fqcn',
  dataset: 'production',

  plugins: [structureTool({structure}), ptBRLocale(), visionTool()],

  schema: {
    types: schemaTypes,
    // "Configurações do blog" não aparece no botão de criar documento.
    templates: (templates) => templates.filter(({schemaType}) => !SINGLETONS.has(schemaType)),
  },

  document: {
    // Nem duplicar nem apagar o documento único.
    actions: (actions, {schemaType}) =>
      SINGLETONS.has(schemaType)
        ? actions.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : actions,
  },
})
