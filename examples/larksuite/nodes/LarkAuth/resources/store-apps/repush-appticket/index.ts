import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Repush Appticket'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Repush Appticket',
  value: 'Repush Appticket',
  action: 'Re-push app_ticket',
  description: 'Re-push app_ticket',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_ticket/resend/',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
