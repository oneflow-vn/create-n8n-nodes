import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Delete A Leave Event'],
      },
    },
  },
  {
    displayName: 'Timeoff Event Id',
    name: 'timeoff_event_id',
    required: true,
    description:
      'The ID that uniquely identifies a time off application. For more information, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Delete A Leave Event'],
      },
    },
  },
]
/* eslint-disable */
