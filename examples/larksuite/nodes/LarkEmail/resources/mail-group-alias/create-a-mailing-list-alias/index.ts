import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Mailing List Alias'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Mailing List Alias',
  value: 'Create A Mailing List Alias',
  action: 'Create a mailing list alias',
  description:
    'Creates a mailing list alias.\r\n\r\nAPI reference documentation: [Create a mailing list alias]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-alias/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/aliases',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
