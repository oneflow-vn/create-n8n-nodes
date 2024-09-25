import { INodeProperties } from 'n8n-workflow'

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

export const properties: INodeProperties[] = [
  resourceSelect,
  ...tenant.properties,
]
