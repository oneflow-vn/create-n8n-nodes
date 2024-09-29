import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as uploadAFileInBlocksPreuploading from './upload-a-file-in-blocks-preuploading'
import * as uploadAFileInBlocksUploadBlocks from './upload-a-file-in-blocks-upload-blocks'
import * as completeUploadingAFileInBlocks from './complete-uploading-a-file-in-blocks'

const operations: INodePropertyOptions[] = [
  uploadAFileInBlocksPreuploading.option,
  uploadAFileInBlocksUploadBlocks.option,
  completeUploadingAFileInBlocks.option,
]

export const name = 'Multipart Upload Files'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management File Multipart Upload Files'],
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
  ...uploadAFileInBlocksPreuploading.properties,
  ...uploadAFileInBlocksUploadBlocks.properties,
  ...completeUploadingAFileInBlocks.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
