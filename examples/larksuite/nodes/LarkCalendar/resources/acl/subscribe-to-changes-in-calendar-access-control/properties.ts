import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Subscribe To Changes In Calendar Access Control'],
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
        resource: ['Calendar ACL'],
        operation: ['Subscribe To Changes In Calendar Access Control'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar ACL'],
        operation: ['Subscribe To Changes In Calendar Access Control'],
      },
    },
  },
]
/* eslint-disable */
