import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Mailing List Alias'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Mailing List Alias',
  value: 'Delete A Mailing List Alias',
  action: 'Delete a mailing list alias',
  description:
    'Deletes a mailing list alias.\r\n\r\nAPI reference documentation: [Delete a mailing list alias]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-alias/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/aliases/{{$parameter["alias_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
