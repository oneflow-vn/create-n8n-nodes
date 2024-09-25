import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /mail/v1/mailgroups/{mailgroup_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Modify a mailing list'],
      },
    },
  },
  {
    displayName: 'Mailgroup Id',
    name: 'mailgroup_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Modify a mailing list'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Modify a mailing list'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Modify a mailing list'],
      },
    },
  },
  {
    displayName: 'Who Can Send Mail',
    name: 'who_can_send_mail',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          who_can_send_mail: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Modify a mailing list'],
      },
    },
  },
]
