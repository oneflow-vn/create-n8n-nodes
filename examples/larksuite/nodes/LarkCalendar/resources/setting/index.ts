import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as generateCaldavConfiguration from './generate-caldav-configuration'

const operations: INodePropertyOptions[] = [generateCaldavConfiguration.option]

export const name = 'Setting'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Setting'],
    },
  },
  default: '',
}
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...generateCaldavConfiguration.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
