import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /speech_to_text/v1/speech/file_recognize',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Audio file speech recognition ASR'],
      },
    },
  },
  {
    displayName: 'Config',
    name: 'config',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          config: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Audio file speech recognition ASR'],
      },
    },
  },
  {
    displayName: 'Speech',
    name: 'speech',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          speech: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Audio file speech recognition ASR'],
      },
    },
  },
]
