import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /attendance/v1/shifts/{shift_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Obtain Shift Details'],
      },
    },
  },
  {
    displayName: 'Shift Id',
    name: 'shift_id',
    required: true,
    description:
      'Shift ID, which can be obtained as follows: 1) [Search shift by name]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/query) 2) [Create a shift]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/create)',
    default: '6919358778597097404',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Obtain Shift Details'],
      },
    },
  },
]
/* eslint-disable */
