import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Mailing List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Mailing List',
  value: 'Obtain A Mailing List',
  action: 'Obtain a mailing list',
  description:
    'Obtains the information of a mailing list.\r\n\r\nAPI reference documentation: [Obtain a mailing list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
