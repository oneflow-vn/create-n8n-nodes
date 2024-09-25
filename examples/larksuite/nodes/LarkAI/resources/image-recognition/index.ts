import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as basicImageRecognitionOcr from './basic-image-recognition-ocr'

const operations: INodePropertyOptions[] = [basicImageRecognitionOcr.option]

export const name = 'Image Recognition'

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

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...basicImageRecognitionOcr.properties,
]
