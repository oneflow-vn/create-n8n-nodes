import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Public Mailbox'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Public Mailbox',
  value: 'Obtain A Public Mailbox',
  action: 'Obtain a public mailbox',
  description:
    'Obtains public mailbox information.\r\n\r\nAPI reference documentation: [Obtain a public mailbox]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
