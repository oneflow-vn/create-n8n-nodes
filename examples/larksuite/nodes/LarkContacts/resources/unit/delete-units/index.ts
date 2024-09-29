import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Units'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Units',
  value: 'Delete Units',
  action: 'Delete units',
  description:
    'To delete a unit by calling this API, you must have the scope to update the unit. If the type of the unit is used by another business, it cannot be deleted.\r\n\r\nAPI reference documentation: [Delete units]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/unit/{{$parameter["unit_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
