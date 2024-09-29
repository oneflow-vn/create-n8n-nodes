import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as streamingSpeechRecognitionAsr from './streaming-speech-recognition-asr'
import * as audioFileSpeechRecognitionAsr from './audio-file-speech-recognition-asr'

const operations: INodePropertyOptions[] = [
  streamingSpeechRecognitionAsr.option,
  audioFileSpeechRecognitionAsr.option,
]

export const name = 'Speech Recognition'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['AI Speech To Text Speech Recognition'],
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
  ...streamingSpeechRecognitionAsr.properties,
  ...audioFileSpeechRecognitionAsr.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
