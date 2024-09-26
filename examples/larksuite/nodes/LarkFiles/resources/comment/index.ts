import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainACommentList from './obtain-a-comment-list'
import * as addAComment from './add-a-comment'
import * as obtainAComment from './obtain-a-comment'
import * as solveOrRestoreAComment from './solve-or-restore-a-comment'
import * as updateAReply from './update-a-reply'
import * as deleteAReply from './delete-a-reply'

const operations: INodePropertyOptions[] = [
  obtainACommentList.option,
  addAComment.option,
  obtainAComment.option,
  solveOrRestoreAComment.option,
  updateAReply.option,
  deleteAReply.option,
]

export const name = 'Comment'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Comment'],
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
  ...obtainACommentList.properties,
  ...addAComment.properties,
  ...obtainAComment.properties,
  ...solveOrRestoreAComment.properties,
  ...updateAReply.properties,
  ...deleteAReply.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
