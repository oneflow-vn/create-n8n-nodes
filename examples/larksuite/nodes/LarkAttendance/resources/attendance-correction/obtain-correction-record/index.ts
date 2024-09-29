import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Correction Record'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Correction Record',
  value: 'Obtain Correction Record',
  action: 'Obtain correction record',
  description:
    'Obtains correction records of authorized employees.\r\n\r\nAPI reference documentation: [Obtain correction record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task_remedy/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_task_remedys/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
