import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Unit Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Unit Information',
  value: 'Obtain Unit Information',
  action: 'Obtain unit information',
  description:
    'To obtain unit information by calling this API, you must have the scope to obtain unit information.\r\n\r\nAPI reference documentation: [Obtain unit information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/unit/{{$parameter["unit_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
