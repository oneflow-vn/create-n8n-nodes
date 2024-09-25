import { INodeProperties } from 'n8n-workflow'

import * as app from './app'
import * as table from './table'
import * as view from './view'
import * as record from './record'
import * as field from './field'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'App',
      value: 'Docs Bitable App',
    },
    {
      name: 'Table',
      value: 'Docs Bitable Table',
    },
    {
      name: 'view',
      value: 'Docs Bitable View',
    },
    {
      name: 'record',
      value: 'Docs Bitable Record',
    },
    {
      name: 'Field',
      value: 'Docs Bitable Field',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
  ...app.properties,
  ...table.properties,
  ...view.properties,
  ...record.properties,
  ...field.properties,
]
