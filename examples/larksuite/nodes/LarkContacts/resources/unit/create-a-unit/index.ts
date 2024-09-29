import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Unit'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Unit',
  value: 'Create A Unit',
  action: 'Create a unit',
  description:
    'To use this API to create a unit, you must have the scope to update the unit. Note: Unit is available on Enterprise Edition only. Companies must activate this edition before they can create units.\r\n\r\nAPI reference documentation: [Create a unit]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/unit',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
