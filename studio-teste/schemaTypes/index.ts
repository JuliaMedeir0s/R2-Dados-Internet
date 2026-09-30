import {authorType} from './authorType'
import {blogSettingsType} from './blogSettingsType'
import {blockContent} from './objects/blockContent'
import {imagemComAlt} from './objects/imagemComAlt'
import {seo} from './objects/seo'
import {postType} from './postType'
import {pracaPageType} from './pracaPageType'

export const schemaTypes = [
  // Documentos
  postType,
  pracaPageType,
  authorType,
  blogSettingsType,
  // Objetos
  blockContent,
  imagemComAlt,
  seo,
]
