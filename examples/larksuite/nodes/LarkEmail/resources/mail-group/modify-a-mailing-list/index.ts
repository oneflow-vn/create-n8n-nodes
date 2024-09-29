import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify A Mailing List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Modify A Mailing List',
  value: 'Modify A Mailing List',
  action: 'Modify a mailing list',
  description:
    'Updates some fields of a mailing list. The fields not specified are not updated.\r\n\r\nAPI reference documentation: [Modify a mailing list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
