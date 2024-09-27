import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as imageRecognition from './image-recognition'
import * as speechRecognition from './speech-recognition'
import * as text from './text'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [
      {
        name: 'Tenant Token',
        value: 'larkSuiteTenantApi',
      },
      {
        name: 'OAuth2',
        value: 'larkSuiteOAuth2Api',
      },
    ],
    default: 'larkSuiteTenantApi',
  },
]

const resourceSelect: INodeProperties[] = [
  {
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
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...imageRecognition.properties,
  ...speechRecognition.properties,
  ...text.properties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  imageRecognition.methods,
  speechRecognition.methods,
  text.methods,
])

export { properties, methods }
