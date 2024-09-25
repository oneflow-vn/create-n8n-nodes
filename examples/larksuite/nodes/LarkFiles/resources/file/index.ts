import { INodeProperties } from 'n8n-workflow'

import * as uploadAFile from './upload-a-file'
import * as downloadAFile from './download-a-file'
import * as deleteAFile from './delete-a-file'

export const name = 'File'

export const properties: INodeProperties[] = [
  ...uploadAFile.properties,
  ...downloadAFile.properties,
  ...deleteAFile.properties,
]
