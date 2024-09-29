import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Attendance Group Details'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Attendance Group Details',
  value: 'Obtain Attendance Group Details',
  action: 'Obtain attendance group details',
  description:
    'Obtains attendance group details via an attendance group ID.\r\n\r\nAPI reference documentation: [Obtain attendance group details]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/attendance/v1/groups/{{$parameter["group_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
