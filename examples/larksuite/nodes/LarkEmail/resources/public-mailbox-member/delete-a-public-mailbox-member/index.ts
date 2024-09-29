import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Public Mailbox Member'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Public Mailbox Member',
  value: 'Delete A Public Mailbox Member',
  action: 'Delete a public mailbox member',
  description:
    'Deletes a member of a public mailbox.\r\n\r\nAPI reference documentation: [Delete a public mailbox member]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
