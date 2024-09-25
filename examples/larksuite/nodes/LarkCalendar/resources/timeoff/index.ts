import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as createALeaveEvent from './create-a-leave-event'
import * as deleteALeaveEvent from './delete-a-leave-event'

const operations: INodePropertyOptions[] = [
  createALeaveEvent.option,
  deleteALeaveEvent.option,
]

export const name = 'Timeoff'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Timeoff'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...createALeaveEvent.properties,
  ...deleteALeaveEvent.properties,
]
