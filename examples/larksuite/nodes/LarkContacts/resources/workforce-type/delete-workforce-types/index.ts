import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Workforce Types'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Workforce Types',
  value: 'Delete Workforce Types',
  action: 'Delete workforce types',
  description:
    'This API is used to delete custom workforce types.\r\n\r\nAPI reference documentation: [Delete workforce types]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/employee_type_enums/{{$parameter["enum_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
