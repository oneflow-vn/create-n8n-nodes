import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /calendar/v4/exchange_bindings/{exchange_binding_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Query The Connection Status'],
      },
    },
  },
  {
    displayName: 'Exchange Binding Id',
    name: 'exchange_binding_id',
    required: true,
    description:
      'The ID that uniquely identifies a connection to Exchange. For more information, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Query The Connection Status'],
      },
    },
  },
]
/* eslint-disable */
