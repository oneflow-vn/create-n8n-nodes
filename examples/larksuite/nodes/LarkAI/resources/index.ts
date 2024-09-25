import { INodeProperties } from 'n8n-workflow'

import * as imageRecognition from './image-recognition'
import * as speechRecognition from './speech-recognition'
import * as text from './text'

export const properties: INodeProperties[] = [
  ...imageRecognition.properties,
  ...speechRecognition.properties,
  ...text.properties,
]
