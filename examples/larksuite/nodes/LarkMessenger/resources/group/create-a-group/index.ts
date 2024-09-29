import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Group',
  value: 'Create A Group',
  action: 'Create a group',
  description:
    'Creates a group and sets the profile photo, name, and description for the group.\r\n\r\nAPI reference documentation: [Create a group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
