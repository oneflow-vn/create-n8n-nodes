import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Flexible Minutes',
    name: 'flexible_minutes',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          flexible_minutes: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Is Flexible',
    name: 'is_flexible',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          is_flexible: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Late Off Late On Rule',
    name: 'late_off_late_on_rule',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'late_off_minutes',
            displayName: 'late_off_minutes',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'late_on_minutes',
            displayName: 'late_on_minutes',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          late_off_late_on_rule: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'No Need Off',
    name: 'no_need_off',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          no_need_off: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Punch Time Rule',
    name: 'punch_time_rule',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'early_minutes_as_early',
            displayName: 'early_minutes_as_early',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'early_minutes_as_lack',
            displayName: 'early_minutes_as_lack',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'late_minutes_as_lack',
            displayName: 'late_minutes_as_lack',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'late_minutes_as_late',
            displayName: 'late_minutes_as_late',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'off_delay_minutes',
            displayName: 'off_delay_minutes',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'off_time',
            displayName: 'off_time',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'on_advance_minutes',
            displayName: 'on_advance_minutes',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'on_time',
            displayName: 'on_time',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          punch_time_rule: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Punch Times',
    name: 'punch_times',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          punch_times: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Rest Time Rule',
    name: 'rest_time_rule',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'rest_begin_time',
            displayName: 'rest_begin_time',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'rest_end_time',
            displayName: 'rest_end_time',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          rest_time_rule: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Shift Name',
    name: 'shift_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          shift_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "flexible_minutes": 0,\n  "is_flexible": true,\n  "late_off_late_on_rule": [\n    {\n      "late_off_minutes": 0,\n      "late_on_minutes": 0\n    }\n  ],\n  "no_need_off": true,\n  "punch_time_rule": [\n    {\n      "early_minutes_as_early": 0,\n      "early_minutes_as_lack": 0,\n      "late_minutes_as_lack": 0,\n      "late_minutes_as_late": 0,\n      "off_delay_minutes": 0,\n      "off_time": "string",\n      "on_advance_minutes": 0,\n      "on_time": "string"\n    }\n  ],\n  "punch_times": 0,\n  "rest_time_rule": [\n    {\n      "rest_begin_time": "string",\n      "rest_end_time": "string"\n    }\n  ],\n  "shift_name": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Shift'],
        operation: ['Create Shifts'],
      },
    },
  },
]
/* eslint-disable */
