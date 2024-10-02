/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/departments/{department_id}/children',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Department'],
        operation: ['Obtain The List Of Sub Departments'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    required: true,
    description: 'Department ID. The root department ID is 0.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Department'],
        operation: ['Obtain The List Of Sub Departments'],
      },
    },
  },
]
