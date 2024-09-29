import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as apiAccessToken from './api-access-token'
import * as storeApps from './store-apps'
import * as customApps from './custom-apps'
import * as userId from './user-id'

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
        name: 'Api Access Token',
        value: 'API Access Token',
        description: '',
      },
      {
        name: 'Store Apps',
        value: 'API Access Token Store Apps',
        description: '',
      },
      {
        name: 'Custom Apps',
        value: 'API Access Token Custom Apps',
        description: '',
      },
      {
        name: 'User Id',
        value: 'API Access Token User ID',
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
  ...apiAccessToken.properties,
  ...storeApps.properties,
  ...customApps.properties,
  ...userId.properties,
  ...extraProperties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  apiAccessToken.methods,
  storeApps.methods,
  customApps.methods,
  userId.methods,
])

export { properties, methods }
