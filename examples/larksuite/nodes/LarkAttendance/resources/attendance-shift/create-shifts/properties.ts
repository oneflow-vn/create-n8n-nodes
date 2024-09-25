import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/shifts',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Flexible Minutes',
    name: 'flexible_minutes',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          flexible_minutes: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Is Flexible',
    name: 'is_flexible',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_flexible: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Late Off Late On Rule',
    name: 'late_off_late_on_rule',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          late_off_late_on_rule: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'No Need Off',
    name: 'no_need_off',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          no_need_off: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Punch Time Rule',
    name: 'punch_time_rule',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          punch_time_rule: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Punch Times',
    name: 'punch_times',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          punch_times: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Rest Time Rule',
    name: 'rest_time_rule',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          rest_time_rule: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
  {
    displayName: 'Shift Name',
    name: 'shift_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          shift_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create shifts'],
      },
    },
  },
]
