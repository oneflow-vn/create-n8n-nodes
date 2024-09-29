import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The List Of Departments Associated With A Unit'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The List Of Departments Associated With A Unit',
  value: 'Obtain The List Of Departments Associated With A Unit',
  action: 'Obtain the list of departments associated with a unit',
  description:
    'To obtain the department list bound to the unit through this interface\r\n\r\nAPI reference documentation: [Obtain the list of departments associated with a unit]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list_department)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/unit/list_department',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
