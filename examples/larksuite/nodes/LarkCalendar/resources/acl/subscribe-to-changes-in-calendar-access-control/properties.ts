import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/{calendar_id}/acls/subscription',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Subscribe to changes in calendar access control'],
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
        resource: ['Calendar ACL'],
        operation: ['Subscribe to changes in calendar access control'],
      },
    },
  },
  {
    displayName:
      "POST /calendar/v4/calendars/{calendar_id}/acls/subscription<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Subscribe to changes in calendar access control'],
      },
    },
  },
]
