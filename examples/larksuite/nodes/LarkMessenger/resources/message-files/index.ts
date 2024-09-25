import { INodeProperties } from 'n8n-workflow'

import * as uploadFiles from './upload-files'
import * as downloadFiles from './download-files'

export const name = 'Message  Files'

export const properties: INodeProperties[] = [
  ...uploadFiles.properties,
  ...downloadFiles.properties,
]
