import { INodeProperties } from 'n8n-workflow'

import * as search from './search'
import * as replace from './replace'

export const name = 'Sheet  Data'

export const properties: INodeProperties[] = [
  ...search.properties,
  ...replace.properties,
]
