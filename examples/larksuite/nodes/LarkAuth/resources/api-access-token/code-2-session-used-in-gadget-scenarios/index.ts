/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Code2session Used In Gadget Scenarios'

const rawOption: INodePropertyOptions = {
  name: 'Code2session Used In Gadget Scenarios',
  value: 'Code2session Used In Gadget Scenarios',
  action: 'Code2session Used In Gadget Scenarios Api Access Token',
  description: 'code2session【Used in Gadget scenarios】',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/mina/v2/tokenLoginValidate',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
