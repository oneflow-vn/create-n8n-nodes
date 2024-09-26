import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as approvalTaskAddSign from './approval-task-add-sign'
import * as approvalPreview from './approval-preview'
import * as taskListFromUserPerspective from './task-list-from-user-perspective'

const operations: INodePropertyOptions[] = [
  approvalTaskAddSign.option,
  approvalPreview.option,
  taskListFromUserPerspective.option,
]

export const name = 'API Reference'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Approval API Reference'],
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
  ...approvalTaskAddSign.properties,
  ...approvalPreview.properties,
  ...taskListFromUserPerspective.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
