import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Avatar Key',
    name: 'avatar_key',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          avatar_key: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'City',
    name: 'city',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          city: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Country',
    name: 'country',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          country: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Custom Attrs',
    name: 'custom_attrs',
    type: 'json',
    default: '[\n  {\n    "value": {\n      "generic_user": {}\n    }\n  }\n]',
    routing: {
      request: {
        body: {
          custom_attrs: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Department Ids',
    name: 'department_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          department_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
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
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Employee No',
    name: 'employee_no',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          employee_no: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          employee_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'En Name',
    name: 'en_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          en_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Ent Email Password',
    name: 'ent_email_password',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          ent_email_password: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Enterprise Email',
    name: 'enterprise_email',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          enterprise_email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Gender',
    name: 'gender',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          gender: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Idp Type',
    name: 'idp_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          idp_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Job Title',
    name: 'job_title',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          job_title: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Join Time',
    name: 'join_time',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          join_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Leader User Id',
    name: 'leader_user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          leader_user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Mobile',
    name: 'mobile',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          mobile: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Mobile Visible',
    name: 'mobile_visible',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          mobile_visible: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
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
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Need Send Notification',
    name: 'need_send_notification',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          need_send_notification: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Nickname',
    name: 'nickname',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          nickname: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Notification Option',
    name: 'notification_option',
    type: 'json',
    default: '{\n  "channels": [\n    null\n  ]\n}',
    routing: {
      request: {
        body: {
          notification_option: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Orders',
    name: 'orders',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          orders: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Positions',
    name: 'positions',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          positions: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
  {
    displayName: 'Work Station',
    name: 'work_station',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          work_station: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create a user'],
      },
    },
  },
]
