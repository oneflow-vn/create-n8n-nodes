import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as tenant from './tenant'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [
      {
        name: 'Tenant Token',
        value: 'accessToken',
      },
      {
        name: 'OAuth2',
        value: 'oAuth2',
      },
    ],
    default: 'accessToken',
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
        name: 'Tenant',
        value: 'Company Information Tenant',
      },
    ],
    default: '',
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...tenant.properties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([selfMethods, tenant.methods])

export { properties, methods }
