import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Approval Preview'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Approval Preview',
  value: 'Approval Preview',
  action: 'Approval Preview',
  description:
    'API reference documentation: [Approval Preview]({{document_base_url}}/ukTMukTMukTM/ukTM5UjL5ETO14SOxkTN/approval-preview)',
  routing: {
    request: {
      method: 'POST',
      url: '=/approval/v4/instances/preview',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
