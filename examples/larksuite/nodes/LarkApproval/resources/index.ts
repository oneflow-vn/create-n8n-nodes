import { INodeProperties } from 'n8n-workflow'

import * as apiReference from './api-reference'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'API Reference',
      value: 'Approval API Reference',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
  ...apiReference.properties,
]
