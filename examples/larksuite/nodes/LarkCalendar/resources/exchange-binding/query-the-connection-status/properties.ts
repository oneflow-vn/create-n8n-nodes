import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Query the connection status'],
      },
    },
  },
  {
    displayName: 'Exchange Binding Id',
    name: 'exchange_binding_id',
    required: true,
    default:
      'ZW1haWxfYWRtaW5fZXhhbXBsZUBvdXRsb29rLmNvbSBlbWFpbF9hY2NvdW50X2V4YW1wbGVAb3V0bG9vay5jb20\n\n\ncalendar.v4.errorcode.190008.suggestion=$$$The page_token or sync_token has expired. Leave the token field blank and try again.',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Query the connection status'],
      },
    },
  },
]
