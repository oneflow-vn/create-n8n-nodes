import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /attendance/v1/user_flows/{user_flow_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Obtain Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description:
      'Type of employee ID for user_id and creator_id in response body',
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
        operation: ['Obtain Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'User Flow Id',
    name: 'user_flow_id',
    required: true,
    description:
      'Attendance flow record ID, which is obtained as follows: 1) [Batch query of attendance flow record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/query) 2) [Obtain attendance results]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query) 3) [Import attendance flow record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/batch_create)',
    default: '6708236686834352397',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Obtain Attendance Flow Record'],
      },
    },
  },
]
/* eslint-disable */
