import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as uploadAFileInBlocksPreuploading from './upload-a-file-in-blocks-preuploading'
import * as uploadAFileInBlocksUploadBlocks from './upload-a-file-in-blocks-upload-blocks'
import * as completeUploadingAFileInBlocks from './complete-uploading-a-file-in-blocks'

const operations: INodePropertyOptions[] = [
  uploadAFileInBlocksPreuploading.option,
  uploadAFileInBlocksUploadBlocks.option,
  completeUploadingAFileInBlocks.option,
]

export const name = 'Multipart Upload Files'

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

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...uploadAFileInBlocksPreuploading.properties,
  ...uploadAFileInBlocksUploadBlocks.properties,
  ...completeUploadingAFileInBlocks.properties,
]
