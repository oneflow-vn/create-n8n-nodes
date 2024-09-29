import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Public Mailbox Member Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Public Mailbox Member Information',
  value: 'Obtain Public Mailbox Member Information',
  action: 'Obtain public mailbox member information',
  description:
    'Obtains the information of a public mailbox member.\r\n\r\nAPI reference documentation: [Obtain public mailbox member information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
