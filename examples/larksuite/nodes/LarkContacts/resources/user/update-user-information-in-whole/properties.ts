import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /contact/v3/users/{user_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Update user information in whole'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
      },
    },
  },
  {
    displayName: 'Is Frozen',
    name: 'is_frozen',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_frozen: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
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
        operation: ['Update user information in whole'],
      },
    },
  },
]
