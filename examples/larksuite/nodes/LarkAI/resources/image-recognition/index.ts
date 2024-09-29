import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as basicImageRecognitionOcr from './basic-image-recognition-ocr'

const operations: INodePropertyOptions[] = [basicImageRecognitionOcr.option]

export const name = 'Image Recognition'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['AI Optical Character Recognition Image Recognition'],
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
  ...basicImageRecognitionOcr.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
