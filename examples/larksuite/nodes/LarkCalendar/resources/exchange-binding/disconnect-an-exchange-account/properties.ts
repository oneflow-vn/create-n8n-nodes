import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /calendar/v4/exchange_bindings/{exchange_binding_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Disconnect an Exchange account'],
      },
    },
  },
  {
    displayName: 'Exchange Binding Id',
    name: 'exchange_binding_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Disconnect an Exchange account'],
      },
    },
  },
]
