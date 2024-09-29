import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Create A Member Who Can Send Emails To Mailing List Addresses'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Member Who Can Send Emails To Mailing List Addresses',
  value: 'Create A Member Who Can Send Emails To Mailing List Addresses',
  action: 'Create a member who can send emails to mailing list addresses',
  description:
    'Adds a member with custom permission to the mailing list, who will then be able to send emails to this mailing list.\r\n\r\nAPI reference documentation: [Create a member who can send emails to mailing list addresses]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
