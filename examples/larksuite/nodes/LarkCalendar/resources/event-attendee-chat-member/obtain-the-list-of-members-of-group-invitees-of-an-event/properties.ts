import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /calendar/v4/calendars/{calendar_id}/events/{event_id}/attendees/{attendee_id}/chat_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain the list of members of group invitees of an event'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain the list of members of group invitees of an event'],
      },
    },
  },
  {
    displayName: 'Event Id',
    name: 'event_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain the list of members of group invitees of an event'],
      },
    },
  },
  {
    displayName: 'Attendee Id',
    name: 'attendee_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain the list of members of group invitees of an event'],
      },
    },
  },
]
