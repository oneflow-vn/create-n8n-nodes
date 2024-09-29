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
        description: '',
      },
      {
        name: 'Table',
        value: 'Docs Bitable Table',
        description: '',
      },
      {
        name: 'View',
        value: 'Docs Bitable View',
        description: '',
      },
      {
        name: 'Record',
        value: 'Docs Bitable Record',
        description: '',
      },
      {
        name: 'Field',
        value: 'Docs Bitable Field',
        description: '',
      },
    ],
    default: '',
  },
]

const extraProperties: INodeProperties[] = [
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    options: [
      {
        displayName: 'Use Custom Body',
        name: 'useCustomBody',
        type: 'boolean',
        description: 'Wether to use a custom body',
        required: true,
        default: false,
      },
    ],
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
  ...extraProperties,
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
