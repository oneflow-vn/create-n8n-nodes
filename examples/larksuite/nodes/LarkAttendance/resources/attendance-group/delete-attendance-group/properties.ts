import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /attendance/v1/groups/{group_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Delete Attendance Group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    description:
      'Attendance group ID is obtained as follows: 1) [Create or modify attendance groups]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/create) 2) [Query attendance group by name]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/search) 3) [Obtain attendance results]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query)',
    default: '6919358128597097404',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Delete Attendance Group'],
      },
    },
  },
]
/* eslint-disable */
