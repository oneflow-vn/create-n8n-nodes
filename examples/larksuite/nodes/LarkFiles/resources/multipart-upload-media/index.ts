import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as uploadAMaterialInBlocksPreuploading from './upload-a-material-in-blocks-preuploading'
import * as uploadAMaterialInBlocksUploadBlocks from './upload-a-material-in-blocks-upload-blocks'
import * as completeUploadingAMaterialInBlocks from './complete-uploading-a-material-in-blocks'

const operations: INodePropertyOptions[] = [
  uploadAMaterialInBlocksPreuploading.option,
  uploadAMaterialInBlocksUploadBlocks.option,
  completeUploadingAMaterialInBlocks.option,
]

export const name = 'Multipart Upload Media'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Media Multipart Upload Media'],
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
  ...uploadAMaterialInBlocksPreuploading.properties,
  ...uploadAMaterialInBlocksUploadBlocks.properties,
  ...completeUploadingAMaterialInBlocks.properties,
]
