import { INodeProperties } from 'n8n-workflow'
import runhook from './hooks'

import * as application from './application'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Application',
      value: 'App Information Application',
    },
  ],
  default: '',
}

const rawProperties: INodeProperties[] = [
  resourceSelect,
  ...application.properties,
]

const { properties } = runhook(rawProperties)

export { properties }
