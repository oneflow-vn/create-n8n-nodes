import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Mailing Lists In Batch'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Mailing Lists In Batch',
  value: 'Obtain Mailing Lists In Batch',
  action: 'Obtain mailing lists in batch',
  description:
    'Obtains mailing lists by pages.\r\n\r\nAPI reference documentation: [Obtain mailing lists in batch]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
