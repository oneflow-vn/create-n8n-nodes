import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain All Mailing List Aliases'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain All Mailing List Aliases',
  value: 'Obtain All Mailing List Aliases',
  action: 'Obtain all mailing list aliases',
  description:
    'Obtains all mailing list aliases.\r\n\r\nAPI reference documentation: [Obtain all mailing list aliases]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-alias/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/aliases',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
