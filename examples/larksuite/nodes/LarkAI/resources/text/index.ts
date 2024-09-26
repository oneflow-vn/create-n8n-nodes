import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as translateWithMachineTranslation from './translate-with-machine-translation'
import * as textLanguageRecognition from './text-language-recognition'

const operations: INodePropertyOptions[] = [
  translateWithMachineTranslation.option,
  textLanguageRecognition.option,
]

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
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...translateWithMachineTranslation.properties,
  ...textLanguageRecognition.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
