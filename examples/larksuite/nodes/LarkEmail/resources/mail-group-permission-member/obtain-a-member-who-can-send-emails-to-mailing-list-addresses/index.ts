import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Obtain A Member Who Can Send Emails To Mailing List Addresses'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Member Who Can Send Emails To Mailing List Addresses',
  value: 'Obtain A Member Who Can Send Emails To Mailing List Addresses',
  action: 'Obtain a member who can send emails to mailing list addresses',
  description:
    'Obtains the information of a member who can send emails to mailing list addresses.\r\n\r\nAPI reference documentation: [Obtain a member who can send emails to mailing list addresses]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members/{{$parameter["permission_member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
