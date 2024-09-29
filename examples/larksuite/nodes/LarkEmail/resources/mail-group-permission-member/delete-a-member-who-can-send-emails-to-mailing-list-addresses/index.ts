import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Delete A Member Who Can Send Emails To Mailing List Addresses'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Member Who Can Send Emails To Mailing List Addresses',
  value: 'Delete A Member Who Can Send Emails To Mailing List Addresses',
  action: 'Delete a member who can send emails to mailing list addresses',
  description:
    'Deletes a member with custom permission, who will then be unable to send emails to this mailing list.\r\n\r\nAPI reference documentation: [Delete a member who can send emails to mailing list addresses]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members/{{$parameter["permission_member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
