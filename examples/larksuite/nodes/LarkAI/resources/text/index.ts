import { INodeProperties } from 'n8n-workflow'

import * as translateWithMachineTranslation from './translate-with-machine-translation'
import * as textLanguageRecognition from './text-language-recognition'

export const name = 'Text'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['AI Machine Translation Text'],
    },
  },
  options: [
    {
      name: 'Translate with machine translation',
      value: 'Translate with machine translation',
      action: 'Translate with machine translation',
      routing: {
        request: {
          method: 'POST',
          url: '=/translation/v1/text/translate',
        },
      },
    },
    {
      name: 'Text language recognition',
      value: 'Text language recognition',
      action: 'Text language recognition',
      routing: {
        request: {
          method: 'POST',
          url: '=/translation/v1/text/detect',
        },
      },
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  operationSelect,
  ...translateWithMachineTranslation.properties,
  ...textLanguageRecognition.properties,
]
