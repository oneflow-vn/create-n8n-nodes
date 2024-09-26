import { INodeProperties } from 'n8n-workflow'
import runhook from './hooks'

import * as tenant from './tenant'

const resourceSelect: INodeProperties = {
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
}

const rawProperties: INodeProperties[] = [resourceSelect, ...tenant.properties]

const { properties } = runhook(rawProperties)

export { properties }
