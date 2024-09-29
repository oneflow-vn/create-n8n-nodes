import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/medias/{file_token}/download',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Download A Material'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description:
      'Token of the file. For more information about how to obtain the token, see [Overview]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Download A Material'],
      },
    },
  },
]
/* eslint-disable */
