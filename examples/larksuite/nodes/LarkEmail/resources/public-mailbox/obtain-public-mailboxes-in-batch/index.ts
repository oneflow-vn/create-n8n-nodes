import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Public Mailboxes In Batch'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Public Mailboxes In Batch',
  value: 'Obtain Public Mailboxes In Batch',
  action: 'Obtain public mailboxes in batch',
  description:
    'Obtains the list of public mailboxes by pages.\r\n\r\nAPI reference documentation: [Obtain public mailboxes in batch]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
