import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Attendance Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Attendance Group',
  value: 'Delete Attendance Group',
  action: 'Delete attendance group',
  description:
    'Deletes a shift via shift ID.\r\n\r\nAPI reference documentation: [Delete attendance group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/attendance/v1/groups/{{$parameter["group_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
