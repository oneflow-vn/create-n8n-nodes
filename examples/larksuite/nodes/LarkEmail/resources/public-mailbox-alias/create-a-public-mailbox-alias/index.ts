import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Public Mailbox Alias'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Public Mailbox Alias',
  value: 'Create A Public Mailbox Alias',
  action: 'Create a public mailbox alias',
  description:
    'Creates a public mailbox alias.\r\n\r\nAPI reference documentation: [Create a public mailbox alias]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-alias/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/aliases',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
