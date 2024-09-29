import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Clear Public Mailbox Members'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Clear Public Mailbox Members',
  value: 'Clear Public Mailbox Members',
  action: 'Clear public mailbox members',
  description:
    'Deletes all members of a public mailbox.\r\n\r\nAPI reference documentation: [Clear public mailbox members]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/clear)',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members/clear',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
