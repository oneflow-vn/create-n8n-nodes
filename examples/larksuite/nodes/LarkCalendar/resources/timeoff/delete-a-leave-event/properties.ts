import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /calendar/v4/timeoff_events/{timeoff_event_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Delete a leave event'],
      },
    },
  },
  {
    displayName: 'Timeoff Event Id',
    name: 'timeoff_event_id',
    required: true,
    default: 'timeoff:XXXXXX-XXXX-0917-1623-aa493d591a39',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Delete a leave event'],
      },
    },
  },
]
