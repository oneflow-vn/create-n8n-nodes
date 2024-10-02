/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import { runHooks } from './hooks'

import * as updateCommonSettingsOfADocument from './update-common-settings-of-a-document'

const operations: INodePropertyOptions[] = [
  updateCommonSettingsOfADocument.option,
]

export const name = 'Permission Public'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Permission Public'],
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
  ...updateCommonSettingsOfADocument.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
