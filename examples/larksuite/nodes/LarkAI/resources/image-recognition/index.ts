import { INodeProperties } from 'n8n-workflow'

import * as basicImageRecognitionOcr from './basic-image-recognition-ocr'

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
  options: [
    {
      name: 'Basic image recognition OCR',
      value: 'Basic image recognition OCR',
      action: 'Basic image recognition (OCR)',
      routing: {
        request: {
          method: 'POST',
          url: '=/optical_char_recognition/v1/image/basic_recognize',
        },
      },
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  operationSelect,
  ...basicImageRecognitionOcr.properties,
]
