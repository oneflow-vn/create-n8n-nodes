import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The List Of Groups With The User Or Bot'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The List Of Groups With The User Or Bot',
  value: 'Obtain The List Of Groups With The User Or Bot',
  action: 'Obtain the list of groups with the user or bot',
  description:
    'Obtains the list of groups with the user or bot\r\n\r\nAPI reference documentation: [Obtain the list of groups with the user or bot]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
