import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as approvalTaskAddsign from './approval-task-addsign'
import * as approvalPreview from './approval-preview'
import * as taskListFromUserPerspective from './task-list-from-user-perspective'

const operations: INodePropertyOptions[] = [
  approvalTaskAddsign.option,
  approvalPreview.option,
  taskListFromUserPerspective.option,
]

export const name = 'Api Reference'

/* eslint-disable */
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
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...approvalTaskAddsign.properties,
  ...approvalPreview.properties,
  ...taskListFromUserPerspective.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
