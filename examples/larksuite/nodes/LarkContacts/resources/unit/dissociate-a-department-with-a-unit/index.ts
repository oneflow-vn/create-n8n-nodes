import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Dissociate A Department With A Unit'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Dissociate A Department With A Unit',
  value: 'Dissociate A Department With A Unit',
  action: 'Dissociate a department with a unit',
  description:
    "To dissociate a department with a unit by calling this API, you must have the scopes to update the unit and department's contacts permissions. Unit is available on Enterprise Edition only. Companies must activate this edition before they complete dissociation.\r\n\r\nAPI reference documentation: [Dissociate a department with a unit]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/unbind_department)",
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/unit/unbind_department',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
