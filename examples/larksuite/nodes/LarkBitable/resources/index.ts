import { INodeProperties } from 'n8n-workflow'

import * as app from './app'
import * as table from './table'
import * as view from './view'
import * as record from './record'
import * as field from './field'

export const properties: INodeProperties[] = [
  ...app.properties,
  ...table.properties,
  ...view.properties,
  ...record.properties,
  ...field.properties,
]
