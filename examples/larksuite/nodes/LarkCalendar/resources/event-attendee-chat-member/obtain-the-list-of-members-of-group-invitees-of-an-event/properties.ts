import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Obtain The List Of Members Of Group Invitees Of An Event'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    description:
      'Calendar ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain The List Of Members Of Group Invitees Of An Event'],
      },
    },
  },
  {
    displayName: 'Event Id',
    name: 'event_id',
    required: true,
    description:
      'Event ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain The List Of Members Of Group Invitees Of An Event'],
      },
    },
  },
  {
    displayName: 'Attendee Id',
    name: 'attendee_id',
    required: true,
    description:
      'Group invitee ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee Chat Member'],
        operation: ['Obtain The List Of Members Of Group Invitees Of An Event'],
      },
    },
  },
]
/* eslint-disable */
