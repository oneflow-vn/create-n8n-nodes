import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /translation/v1/text/translate',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate with machine translation'],
      },
    },
  },
  {
    displayName: 'Glossary',
    name: 'glossary',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          glossary: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate with machine translation'],
      },
    },
  },
  {
    displayName: 'Source Language',
    name: 'source_language',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          source_language: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate with machine translation'],
      },
    },
  },
  {
    displayName: 'Target Language',
    name: 'target_language',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          target_language: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate with machine translation'],
      },
    },
  },
  {
    displayName: 'Text',
    name: 'text',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          text: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate with machine translation'],
      },
    },
  },
]
