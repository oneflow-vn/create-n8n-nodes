import { INodeProperties } from 'n8n-workflow'
import runhook from './hooks'

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

const rawProperties: INodeProperties[] = [
  resourceSelect,
  ...apiReference.properties,
]

const { properties } = runhook(rawProperties)

export { properties }
