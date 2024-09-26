import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createSubscription from './create-subscription'
import * as getSubscriptionStatus from './get-subscription-status'
import * as updateSubscriptionStatus from './update-subscription-status'

const operations: INodePropertyOptions[] = [
  createSubscription.option,
  getSubscriptionStatus.option,
  updateSubscriptionStatus.option,
]

export const name = 'Subscription'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Subscription'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...createSubscription.properties,
  ...getSubscriptionStatus.properties,
  ...updateSubscriptionStatus.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
