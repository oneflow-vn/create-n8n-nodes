import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Mailing List Member'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Mailing List Member',
  value: 'Delete A Mailing List Member',
  action: 'Delete a mailing list member',
  description:
    'Deletes a mailing list member.\r\n\r\nAPI reference documentation: [Delete a mailing list member]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
