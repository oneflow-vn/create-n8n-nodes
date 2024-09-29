import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Approval Task Addsign'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Approval Task Addsign',
  value: 'Approval Task Addsign',
  action: 'Approval Task AddSign',
  description:
    'API reference documentation: [Approval Task AddSign]({{document_base_url}}/ukTMukTMukTM/ukTM5UjL5ETO14SOxkTN/approval-task-addsign)',
  routing: {
    request: {
      method: 'POST',
      url: '=/approval/v4/instances/add_sign',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
