import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Custom User Fields Of A Company'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Custom User Fields Of A Company',
  value: 'Obtain Custom User Fields Of A Company',
  action: 'Obtain custom user fields of a company',
  description:
    'Obtain customer user field configuration of a company\r\n\r\nAPI reference documentation: [Obtain custom user fields of a company]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/custom_attrs',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
