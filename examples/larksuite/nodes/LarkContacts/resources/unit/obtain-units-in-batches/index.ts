import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Units In Batches'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Units In Batches',
  value: 'Obtain Units In Batches',
  action: 'Obtain units in batches',
  description:
    "To obtain a company's units by calling this API, you must have the scope to obtain the units.\r\n\r\nAPI reference documentation: [Obtain units in batches]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list)",
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/unit',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
