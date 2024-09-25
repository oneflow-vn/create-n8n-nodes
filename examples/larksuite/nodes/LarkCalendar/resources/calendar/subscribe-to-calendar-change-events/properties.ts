import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/subscription',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Subscribe to calendar change events'],
      },
    },
  },
  {
    displayName:
      "POST /calendar/v4/calendars/subscription<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Subscribe to calendar change events'],
      },
    },
  },
]
