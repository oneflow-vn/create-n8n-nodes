import { INodeProperties } from 'n8n-workflow'

import * as streamingSpeechRecognitionAsr from './streaming-speech-recognition-asr'
import * as audioFileSpeechRecognitionAsr from './audio-file-speech-recognition-asr'

export const name = 'Speech Recognition'

export const properties: INodeProperties[] = [
  ...streamingSpeechRecognitionAsr.properties,
  ...audioFileSpeechRecognitionAsr.properties,
]
