import { INodeProperties } from 'n8n-workflow'

import * as uploadImages from './upload-images'
import * as downloadImages from './download-images'

export const name = 'Message  Images'

export const properties: INodeProperties[] = [
  ...uploadImages.properties,
  ...downloadImages.properties,
]
