import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Updates Permissions Of A Collaborator'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Updates Permissions Of A Collaborator',
  value: 'Updates Permissions Of A Collaborator',
  action: 'Updates permissions of a collaborator',
  description:
    'This API is used to update permissions of a document collaborator based on a filetoken.\r\n\r\nAPI reference documentation: [Updates permissions of a collaborator]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
