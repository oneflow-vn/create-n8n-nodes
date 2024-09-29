import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update A Public Mailbox'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update A Public Mailbox',
  value: 'Update A Public Mailbox',
  action: 'Update a public mailbox',
  description:
    'Updates all information of a public mailbox.\r\n\r\nAPI reference documentation: [Update a public mailbox]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
