import { INodeProperties } from 'n8n-workflow'

import * as streamingSpeechRecognitionAsr from './streaming-speech-recognition-asr'
import * as audioFileSpeechRecognitionAsr from './audio-file-speech-recognition-asr'

export const name = 'Speech Recognition'

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
  options: [
    {
      name: 'Streaming speech recognition ASR',
      value: 'Streaming speech recognition ASR',
      action: 'Streaming speech recognition (ASR)',
      routing: {
        request: {
          method: 'POST',
          url: '=/speech_to_text/v1/speech/stream_recognize',
        },
      },
    },
    {
      name: 'Audio file speech recognition ASR',
      value: 'Audio file speech recognition ASR',
      action: 'Audio file speech recognition (ASR)',
      routing: {
        request: {
          method: 'POST',
          url: '=/speech_to_text/v1/speech/file_recognize',
        },
      },
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  operationSelect,
  ...streamingSpeechRecognitionAsr.properties,
  ...audioFileSpeechRecognitionAsr.properties,
]
