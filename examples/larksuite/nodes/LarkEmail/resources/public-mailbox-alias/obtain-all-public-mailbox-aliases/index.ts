import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain All Public Mailbox Aliases'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain All Public Mailbox Aliases',
  value: 'Obtain All Public Mailbox Aliases',
  action: 'Obtain all public mailbox aliases',
  description:
    'Obtains all public mailbox aliases.\r\n\r\nAPI reference documentation: [Obtain all public mailbox aliases]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-alias/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/aliases',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
