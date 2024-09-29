import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add Permissions'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add Permissions',
  value: 'Add Permissions',
  action: 'Add permissions',
  description:
    'This API is used to add permissions on a document for a user based on a filetoken.\r\n\r\nAPI reference documentation: [Add permissions]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
