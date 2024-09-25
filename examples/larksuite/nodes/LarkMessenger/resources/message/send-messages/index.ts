import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send messages'

const rawOption: INodePropertyOptions = {
  name: 'Send messages',
  value: 'Send messages',
  action: 'Send messages',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/messages',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
