import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_flows/batch_create',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Import Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description:
      'Type of employee ID for user_id and creator_id in request body and response body',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          employee_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Import Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Flow Records',
    name: 'flow_records',
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
            type: 'json',
            default:
              '{"bssid":"https://example.com/path","check_time":"string","comment":"string","creator_id":"string","device_id":"string","is_field":true,"is_wifi":true,"latitude":0,"location_name":"string","longitude":0,"photo_urls":["https://example.com/path"],"record_id":"string","ssid":"https://example.com/path","type":0,"user_id":"string"}',
            displayName: 'Item',
            name: 'item',
            description: undefined,
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          flow_records: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Import Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "flow_records": [\n    {\n      "bssid": "https://example.com/path",\n      "check_time": "string",\n      "comment": "string",\n      "creator_id": "string",\n      "device_id": "string",\n      "is_field": true,\n      "is_wifi": true,\n      "latitude": 0,\n      "location_name": "string",\n      "longitude": 0,\n      "photo_urls": [\n        "https://example.com/path"\n      ],\n      "record_id": "string",\n      "ssid": "https://example.com/path",\n      "type": 0,\n      "user_id": "string"\n    }\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Records'],
        operation: ['Import Attendance Flow Record'],
      },
    },
  },
]
/* eslint-disable */
