import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/medias/batch_get_tmp_download_url',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Obtain A Temporary Material Download Url'],
      },
    },
  },
  {
    displayName: 'File Tokens',
    name: 'file_tokens',
    description: 'List of file tokens',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          file_tokens: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Obtain A Temporary Material Download Url'],
      },
    },
  },
]
/* eslint-disable */
