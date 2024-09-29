import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Public Mailbox Members In Batch'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Public Mailbox Members In Batch',
  value: 'Obtain Public Mailbox Members In Batch',
  action: 'Obtain public mailbox members in batch',
  description:
    'Obtains the list of public mailbox members by pages.\r\n\r\nAPI reference documentation: [Obtain public mailbox members in batch]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
