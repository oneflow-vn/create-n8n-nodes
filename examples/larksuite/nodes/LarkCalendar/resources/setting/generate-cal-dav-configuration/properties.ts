import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/settings/generate_caldav_conf',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Setting'],
        operation: ['Generate CalDAV configuration'],
      },
    },
  },
  {
    displayName: 'Device Name',
    name: 'device_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          device_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Setting'],
        operation: ['Generate CalDAV configuration'],
      },
    },
  },
]
