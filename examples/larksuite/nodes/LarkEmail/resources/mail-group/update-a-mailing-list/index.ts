import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update A Mailing List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update A Mailing List',
  value: 'Update A Mailing List',
  action: 'Update a mailing list',
  description:
    'Updates all information of a mailing list.\r\n\r\nAPI reference documentation: [Update a mailing list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
