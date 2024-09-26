import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as modifyUserSettings from './modify-user-settings'

const operations: INodePropertyOptions[] = [modifyUserSettings.option]

export const name = 'User Settings'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance User Settings'],
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
  ...modifyUserSettings.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
