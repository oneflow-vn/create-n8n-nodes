import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Company Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Company Information',
  value: 'Obtain Company Information',
  action: 'Obtain company information',
  description:
    'Obtains company information such as the company name and the company ID.\r\n\r\nAPI reference documentation: [Obtain company information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant/query)',
  routing: {
    request: {
      method: 'GET',
      url: '=/tenant/v2/tenant/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
