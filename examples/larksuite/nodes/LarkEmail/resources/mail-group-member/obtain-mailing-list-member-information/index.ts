import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Mailing List Member Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Mailing List Member Information',
  value: 'Obtain Mailing List Member Information',
  action: 'Obtain mailing list member information',
  description:
    'Obtains the information of a mailing list member.\r\n\r\nAPI reference documentation: [Obtain mailing list member information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
