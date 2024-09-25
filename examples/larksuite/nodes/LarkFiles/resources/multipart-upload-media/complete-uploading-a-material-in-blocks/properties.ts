import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/medias/upload_finish',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete uploading a material in blocks'],
      },
    },
  },
  {
    displayName: 'Block Num',
    name: 'block_num',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          block_num: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete uploading a material in blocks'],
      },
    },
  },
  {
    displayName: 'Upload Id',
    name: 'upload_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          upload_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete uploading a material in blocks'],
      },
    },
  },
]
