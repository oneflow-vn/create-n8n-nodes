import { INodeProperties } from 'n8n-workflow'

import * as uploadFiles from './upload-files'

export const name = 'Files'

export const properties: INodeProperties[] = [...uploadFiles.properties]
