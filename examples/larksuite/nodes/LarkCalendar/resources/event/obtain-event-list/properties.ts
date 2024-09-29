import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Obtain Event List'],
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
        resource: ['Calendar Event'],
        operation: ['Obtain Event List'],
      },
    },
  },
]
/* eslint-disable */
