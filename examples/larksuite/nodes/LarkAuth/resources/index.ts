import { INodeProperties } from 'n8n-workflow'

import * as apiAccessToken from './api-access-token'
import * as storeApps from './store-apps'
import * as customApps from './custom-apps'
import * as userId from './user-id'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'API Access Token',
      value: 'API Access Token',
    },
    {
      name: 'Store apps',
      value: 'API Access Token Store Apps',
    },
    {
      name: 'Custom apps',
      value: 'API Access Token Custom Apps',
    },
    {
      name: 'User ID',
      value: 'API Access Token User ID',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
  ...apiAccessToken.properties,
  ...storeApps.properties,
  ...customApps.properties,
  ...userId.properties,
]
