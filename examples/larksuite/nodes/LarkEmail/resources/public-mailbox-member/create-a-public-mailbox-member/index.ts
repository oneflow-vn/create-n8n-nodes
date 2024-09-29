import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Public Mailbox Member'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Public Mailbox Member',
  value: 'Create A Public Mailbox Member',
  action: 'Create a public mailbox member',
  description:
    'Adds a member to a public mailbox.\r\n\r\nAPI reference documentation: [Create a public mailbox member]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
