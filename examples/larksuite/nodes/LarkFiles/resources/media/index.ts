import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as uploadAMaterial from './upload-a-material'
import * as obtainATemporaryMaterialDownloadUrl from './obtain-a-temporary-material-download-url'
import * as downloadAMaterial from './download-a-material'

const operations: INodePropertyOptions[] = [
  uploadAMaterial.option,
  obtainATemporaryMaterialDownloadUrl.option,
  downloadAMaterial.option,
]

export const name = 'Media'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Media'],
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
  ...uploadAMaterial.properties,
  ...obtainATemporaryMaterialDownloadUrl.properties,
  ...downloadAMaterial.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
