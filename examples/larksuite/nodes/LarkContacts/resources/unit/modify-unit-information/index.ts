import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify Unit Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Modify Unit Information',
  value: 'Modify Unit Information',
  action: 'Modify unit information',
  description:
    'To call this API, you must have the scope to update the unit. Note: Unit is available on Enterprise Edition only. Companies must activate this edition before they can modify units.\r\n\r\nAPI reference documentation: [Modify unit information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/unit/{{$parameter["unit_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
