import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /application/v6/applications/underauditlist',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['View The List Of App Release Applications'],
      },
    },
  },
  {
    displayName: 'Lang',
    name: 'lang',
    description: 'Specifies the language of returned results',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          lang: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['View The List Of App Release Applications'],
      },
    },
  },
]
/* eslint-disable */
