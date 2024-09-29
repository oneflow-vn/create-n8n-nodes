import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify A Public Mailbox'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Modify A Public Mailbox',
  value: 'Modify A Public Mailbox',
  action: 'Modify a public mailbox',
  description:
    'Updates some fields of a public mailbox. The fields not specified are not updated.\r\n\r\nAPI reference documentation: [Modify a public mailbox]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
