import { INodeProperties } from 'n8n-workflow'

import * as imageRecognition from './image-recognition'
import * as speechRecognition from './speech-recognition'
import * as text from './text'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Image Recognition',
      value: 'AI Optical Character Recognition Image Recognition',
    },
    {
      name: 'Speech Recognition',
      value: 'AI Speech To Text Speech Recognition',
    },
    {
      name: 'Text',
      value: 'AI Machine Translation Text',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
  ...imageRecognition.properties,
  ...speechRecognition.properties,
  ...text.properties,
]
