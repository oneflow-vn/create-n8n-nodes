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

export const name = 'Re Push App Ticket'

const rawOption: INodePropertyOptions = {
  name: 'Re Push App Ticket',
  value: 'Re Push App Ticket',
  action: 'Re Push App Ticket Api Access Token Store Apps',
  description: 'Re-push app_ticket',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_ticket/resend/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
