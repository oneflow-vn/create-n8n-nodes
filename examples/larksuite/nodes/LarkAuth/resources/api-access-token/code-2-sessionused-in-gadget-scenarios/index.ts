import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Code2sessionused In Gadget Scenarios'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Code2sessionused In Gadget Scenarios',
  value: 'Code2sessionused In Gadget Scenarios',
  action: 'code2session【Used in Gadget scenarios】',
  description: 'code2session【Used in Gadget scenarios】',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/mina/v2/tokenLoginValidate',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
