import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /open-apis/authen/v1/index',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Request user authenticationBrowse open'],
      },
    },
  },
  {
    displayName: 'Redirect Uri',
    name: 'redirect_uri',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          redirect_uri: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Request user authenticationBrowse open'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          app_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Request user authenticationBrowse open'],
      },
    },
  },
  {
    displayName: 'State',
    name: 'state',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          state: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Request user authenticationBrowse open'],
      },
    },
  },
]
