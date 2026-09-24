import {authorType} from './authorType'
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
  // Objetos
  blockContent,
  imagemComAlt,
  seo,
]
