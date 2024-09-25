import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /calendar/v4/calendars/{calendar_id}/events',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Obtain event list'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: 'larksuite.com_xxxxxxxxxx@group.calendar.larksuite.com',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Obtain event list'],
      },
    },
  },
]
