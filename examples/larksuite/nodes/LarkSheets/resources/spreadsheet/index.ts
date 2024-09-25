import { INodeProperties } from 'n8n-workflow'

import * as createSpreadsheet from './create-spreadsheet'

export const name = 'spreadsheet'

export const properties: INodeProperties[] = [...createSpreadsheet.properties]
