import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Task List From User Perspective'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Task List From User Perspective',
  value: 'Task List From User Perspective',
  action: 'Task list from user perspective',
  description:
    'Query task list by user and task group\r\n\r\nAPI reference documentation: [Task list from user perspective]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/task/query)',
  routing: {
    request: {
      method: 'GET',
      url: '=/approval/v4/tasks/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
