import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Obtain The Members Who Can Send Emails To Mailing List Addresses In Batch'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The Members Who Can Send Emails To Mailing List Addresses In Batch',
  value:
    'Obtain The Members Who Can Send Emails To Mailing List Addresses In Batch',
  action:
    'Obtain the members who can send emails to mailing list addresses in batch',
  description:
    'Obtains the list of members who can send emails to mailing list addresses by pages.\r\n\r\nAPI reference documentation: [Obtain the members who can send emails to mailing list addresses in batch]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
