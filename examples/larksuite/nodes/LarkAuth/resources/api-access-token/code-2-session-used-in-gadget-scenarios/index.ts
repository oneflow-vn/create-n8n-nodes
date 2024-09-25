import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'code2sessionUsed in Gadget scenarios'

const rawOption: INodePropertyOptions = {
  name: 'code2sessionUsed in Gadget scenarios',
  value: 'code2sessionUsed in Gadget scenarios',
  action: 'code2session【Used in Gadget scenarios】',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/mina/v2/tokenLoginValidate',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
