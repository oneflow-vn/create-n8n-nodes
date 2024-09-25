import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/files/upload_prepare',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'File Name',
    name: 'file_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Parent Node',
    name: 'parent_node',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          parent_node: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Parent Type',
    name: 'parent_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          parent_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Size',
    name: 'size',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          size: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Preuploading'],
      },
    },
  },
]
