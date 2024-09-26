import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAFloatingImage from './create-a-floating-image'
import * as obtainAFloatingImage from './obtain-a-floating-image'
import * as updateAFloatingImage from './update-a-floating-image'
import * as deleteAFloatingImage from './delete-a-floating-image'
import * as queryFloatingImages from './query-floating-images'

const operations: INodePropertyOptions[] = [
  createAFloatingImage.option,
  obtainAFloatingImage.option,
  updateAFloatingImage.option,
  deleteAFloatingImage.option,
  queryFloatingImages.option,
]

export const name = 'Sheet  Floating image'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Sheet Floating Image'],
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
  ...createAFloatingImage.properties,
  ...obtainAFloatingImage.properties,
  ...updateAFloatingImage.properties,
  ...deleteAFloatingImage.properties,
  ...queryFloatingImages.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
