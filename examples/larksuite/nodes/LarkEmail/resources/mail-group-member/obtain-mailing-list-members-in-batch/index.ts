import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Mailing List Members In Batch'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Mailing List Members In Batch',
  value: 'Obtain Mailing List Members In Batch',
  action: 'Obtain mailing list members in batch',
  description:
    'Obtains the list of mailing list members by pages.\r\n\r\nAPI reference documentation: [Obtain mailing list members in batch]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
