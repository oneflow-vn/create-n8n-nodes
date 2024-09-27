import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as app from './app'
import * as table from './table'
import * as view from './view'
import * as record from './record'
import * as field from './field'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [
      {
        name: 'Tenant Token',
        value: 'larkSuiteTenantApi',
      },
      {
        name: 'OAuth2',
        value: 'larkSuiteOAuth2Api',
      },
    ],
    default: 'larkSuiteTenantApi',
  },
]

const resourceSelect: INodeProperties[] = [
  {
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
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...app.properties,
  ...table.properties,
  ...view.properties,
  ...record.properties,
  ...field.properties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  app.methods,
  table.methods,
  view.methods,
  record.methods,
  field.methods,
])

export { properties, methods }
