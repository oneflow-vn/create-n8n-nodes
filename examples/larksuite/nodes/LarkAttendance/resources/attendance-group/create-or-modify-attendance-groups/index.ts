import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Or Modify Attendance Groups'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Or Modify Attendance Groups',
  value: 'Create Or Modify Attendance Groups',
  action: 'Create or modify attendance groups',
  description:
    'Attendance groups are used to set attendance policy for a department or employee in a specific place and within a specific time period (including clock-in/out, late in, early out, sick leave, marital leave, funeral leave, public holidays, business hours, and overtime).\n\nYou can use attendance groups to set attendance rules such as attendance methods, attendance time, and attendance locations for departments or specific employees.\r\n\r\nAPI reference documentation: [Create or modify attendance groups]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/groups',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
